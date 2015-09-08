exports.findMostPopularCategory = function(fileName,salesFileReader){
var productCategories = {
            'Fanta 500ml' : 'Beverages',
            'Coke 500ml' : 'Beverages',
            'Cream Soda 500ml' : 'Beverages',
            'Shampoo 1 litre' : 'Toiletries',
            'Soap Bar' : 'Toiletries',
            'Mixed Sweets 5s' : 'Luxuries',
            'Heart Chocolates' : 'Luxuries',
            'Iwisa Pap 5kg' : 'Long_Life_Groceries',
            'Top Class Soy Mince' : 'Long_Life_Groceries',
            'Bread' : 'Short_Life_Groceries',
            'Milk 1l' : 'Short_Life_Groceries',
            'Imasi' : 'Short_Life_Groceries',
            'Rose (plastic)' : 'Novelty_Goods',
            'Valentine Cards' : 'Novelty_Goods',
            'Bananas - loose' : 'Fruit',
            'Apples - loose' : 'Fruit',
            'Chakalaka Can' : 'Tinned_Food',
            'Gold Dish Vegetable Curry Can' : 'Tinned_Food'
        };

var salesFileUtilities = require('../modules/readCSV'),
    qTy = require('../routes/products_Categories'),
    salesAccessories = require('../modules/Nelisa_Spaza_Sales_earnings'),
    fileName = 'data/NelisaSalesHistory.csv',
    csvReader = require('../modules/sales_file_utilities'),
    salesLines = salesFileUtilities.getData(fileName),
    productsTotQty = csvReader.getQtyPerProduct(salesLines),
    qtyPerCategoryMap = {};

    for(var productName in productsTotQty){
       
        var qty = productsTotQty[productName];
        var categoryName = productCategories[productName];

        if(qtyPerCategoryMap[categoryName] === undefined){
            qtyPerCategoryMap[categoryName] = 0;
        };
        qtyPerCategoryMap[categoryName] = qtyPerCategoryMap[categoryName] + Number(qty);
    }
    var categoryName = "";
    var qty = 0;

    for(var key in qtyPerCategoryMap){
        var currentQty = qtyPerCategoryMap[key]
        if (currentQty > qty) {
            qty = currentQty;
            categoryName = key;
        };
    }
    
    return {
        categoryName: categoryName,
        qty:qty
    };
}