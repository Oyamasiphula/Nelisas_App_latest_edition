INSERT INTO Purchases_td(Purchases_date ,Product_id ,qTy ,Suppliers_id ,product_price)
SELECT stock_purchases_csv.date,stock_purchases_csv.item,stock_purchases_csv.quantity, Products_td.id AS Product_name, Suppliers_td.id AS Suppliers_name
FROM stock_purchases_csv 
INNER JOIN Products_td
ON Products_td.Product_name = stock_purchases_csv.stock_item;
INNER JOIN Suppliers_td
ON Suppliers_td.id = stock_purchases_csv.shop;