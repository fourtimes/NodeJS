const db = require('../config/db');
const ExcelJS = require('exceljs');

const getRoute = async (req, res) => {
    console.log("Welcome to the app");
    res.send("Welcome to the app");
};

const getAllTransactions = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM transactions');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
};

const exportToExcel = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM transactions');

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Transactions');

    // ========== TITLE ROW ==========
    worksheet.mergeCells('A1:Q1');
    const titleCell = worksheet.getCell('A1');
    titleCell.value = 'RADIANT CASH MANAGEMENT SERVICES LTD - INSTA CREDIT';
    titleCell.font = { size: 14, bold: true };
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' };

    // ========== COLUMN HEADERS ==========
    const headers = [
      'S.No', 'Date', 'Region', 'Trans ID', 'Customer Name', 'CE ID', 'Point Name', 'Location',
      'Amount Collected', 'Transaction Charge', 'GST Amount', 'Amount Credited Customer Account',
      'Deposit Bank Name', 'Account Number', 'Amount Credited Status', 'Subscription Method', 'Point ID'
    ];

    const columnWidths = [
      6, 15, 15, 20, 25, 10, 20, 20, 18, 20, 15, 30, 25, 20, 25, 20, 10
    ];

    // Apply column widths and number formatting
    worksheet.columns = columnWidths.map((width, index) => ({
      width,
      style: index >= 8 && index <= 11 ? { numFmt: '#,##0.00' } : undefined
    }));

    // Insert headers into row 3
    const headerRow = worksheet.addRow(headers);
    headerRow.font = { bold: true };
    headerRow.eachCell(cell => {
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    // ========== DATA ROWS ==========
    let totals = {
      collected: 0,
      charge: 0,
      gst: 0,
      credited: 0
    };

    rows.forEach((row, i) => {
      const {
        date, region, transaction_id, customer_name, ce_id, point_name, location,
        amount_collected, transaction_charge, gst_amount, amount_credited_customer_account,
        deposit_bank_name, account_number, credited_status, subscription_method, point_id
      } = row;

      totals.collected += parseFloat(amount_collected) || 0;
      totals.charge += parseFloat(transaction_charge) || 0;
      totals.gst += parseFloat(gst_amount) || 0;
      totals.credited += parseFloat(amount_credited_customer_account) || 0;

      worksheet.addRow([
        i + 1, date, region, transaction_id, customer_name, ce_id, point_name, location,
        amount_collected, transaction_charge, gst_amount, amount_credited_customer_account,
        deposit_bank_name, account_number, credited_status, subscription_method, point_id
      ]);
    });

    // ========== TOTAL ROW ==========
    const totalRow = worksheet.addRow([
      'TOTAL', '', '', '', '', '', '', '',
      totals.collected, totals.charge, totals.gst, totals.credited,
      '', '', '', '', ''
    ]);

    totalRow.font = { bold: true };
    totalRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFD3D3D3' }
    };

    // ========== RESPONSE ==========
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=transactions.xlsx');
    await workbook.xlsx.write(res);
    res.end();

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to export Excel file' });
  }
};



module.exports = {
  getAllTransactions,
  exportToExcel,
  getRoute
};