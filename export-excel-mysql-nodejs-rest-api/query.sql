CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,              
    date DATE NOT NULL,                             
    region VARCHAR(100),                            
    transaction_id VARCHAR(50) NOT NULL,             
    customer_name VARCHAR(255),                      
    ce_id VARCHAR(50),                              
    point_name VARCHAR(255),                        
    location VARCHAR(255),                           
    amount_collected DECIMAL(10, 2),                 
    transaction_charge DECIMAL(10, 2),               
    gst_amount DECIMAL(10, 2),                       
    amount_credited_customer_account DECIMAL(10, 2),                  
    deposit_bank_name VARCHAR(255),                  
    account_number VARCHAR(100),                     
    credited_status ENUM('Pending', 'Completed', 'Failed'),
    subscription_method VARCHAR(100),                
    point_id VARCHAR(50),                           

    INDEX idx_transaction_id (transaction_id),
    INDEX idx_date (date),
    INDEX idx_customer_name (customer_name)
);


INSERT INTO transactions 
(date, region, transaction_id, customer_name, ce_id, point_name, location, amount_collected, transaction_charge, gst_amount, amount_credited_customer_account, deposit_bank_name, account_number, credited_status, subscription_method, point_id) 
VALUES
('2023-05-31', 'North', 'TXN001', 'Alice Johnson', 'CE001', 'Point A', 'New York', 1000.00, 10.00, 1.80, 988.20, 'Bank of America', '1234567890', 'Completed', 'Online', 'PT001'),

('2023-05-30', 'East', 'TXN002', 'Bob Smith', 'CE002', 'Point B', 'Boston', 1500.00, 15.00, 2.70, 1482.30, 'Wells Fargo', '2345678901', 'Completed', 'Offline', 'PT002'),

('2023-05-29', 'West', 'TXN003', 'Charlie Davis', 'CE003', 'Point C', 'Los Angeles', 750.00, 7.50, 1.35, 741.15, 'Chase', '3456789012', 'Pending', 'Online', 'PT003'),

('2023-05-28', 'South', 'TXN004', 'Diana Prince', 'CE004', 'Point D', 'Houston', 2000.00, 20.00, 3.60, 1976.40, 'Citibank', '4567890123', 'Completed', 'Online', 'PT004'),

('2023-05-27', 'North', 'TXN005', 'Ethan Hunt', 'CE005', 'Point E', 'Chicago', 500.00, 5.00, 0.90, 494.10, 'TD Bank', '5678901234', 'Failed', 'Offline', 'PT005'),

('2023-05-26', 'East', 'TXN006', 'Fiona Glenanne', 'CE006', 'Point F', 'Philadelphia', 1200.00, 12.00, 2.16, 1185.84, 'US Bank', '6789012345', 'Completed', 'Online', 'PT006'),

('2023-05-25', 'West', 'TXN007', 'George Clooney', 'CE007', 'Point G', 'San Diego', 950.00, 9.50, 1.71, 938.79, 'PNC Bank', '7890123456', 'Pending', 'Online', 'PT007'),

('2023-05-24', 'South', 'TXN008', 'Helen Parr', 'CE008', 'Point H', 'Dallas', 1100.00, 11.00, 1.98, 1087.02, 'HSBC', '8901234567', 'Completed', 'Offline', 'PT008'),

('2023-05-23', 'North', 'TXN009', 'Ian Malcolm', 'CE009', 'Point I', 'Seattle', 1300.00, 13.00, 2.34, 1284.66, 'Barclays', '9012345678', 'Completed', 'Online', 'PT009'),

('2023-05-22', 'East', 'TXN010', 'Judy Hopps', 'CE010', 'Point J', 'Atlanta', 800.00, 8.00, 1.44, 790.56, 'Standard Chartered', '0123456789', 'Failed', 'Offline', 'PT010');
