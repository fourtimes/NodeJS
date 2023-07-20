CREATE TABLE cowdetails(
    id INT NOT NULL AUTO_INCREMENT,
    cow_name VARCHAR(30) NOT NULL,
    borrow_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS milkPriceDetails (
    id INT NOT NULL AUTO_INCREMENT,
    cow_name VARCHAR(255) NOT NULL,
    liters FLOAT(25) NOT NULL,
    per_ltr_rate FLOAT(25) NOT NULL,
    total_milk_price FLOAT(25) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS foodDetails(
    id INT NOT NULL AUTO_INCREMENT,
    food_name VARCHAR(255) NOT NULL,
    kg INT(10) NOT NULL,
    amount INT(10) NOT NULL,
    total_amt INT(10) NOT NULL,
    balance_amt INT(10) NOT NULL,
    PRIMARY KEY (id)
);


-- inner join
SELECT
    b.cow_name,
    a.liters,
    a.per_ltr_rate,
    a.total_milk_price,
    sum(a.total_milk_price) AS total_price
FROM
    milkPriceDetails as a
    INNER JOIN cowdetails as b ON b.cow_name = a.cow_name
WHERE
    b.cow_name = "gir"
GROUP BY a.id;



SELECT
    SUM(total_milk_price) AS "Total_earned_amount"
FROM
    milkPriceDetails;


insert into foodDetails (food_name, kg, amount, balance_amount)
values ("kadalai punnaku", 1, 60, 420-60);



