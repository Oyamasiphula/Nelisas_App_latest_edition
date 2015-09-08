exports.findProductCategories = function(lines) {
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

           var prdouctCatNames = {};

  for (key in productCategories) {
    if (prdouctCatNames[productCategories[key]] === undefined){
     prdouctCatNames[productCategories[key]] = productCategories[key];    
     }
     
  }
   var cats = [];
   for(key in prdouctCatNames){
    cats.push(prdouctCatNames[key])
   }
          return cats;
     
};

exports.getSalesPerProductsCategory = function(fileName,fields,salesPrice){
    var fields = salesFileUtilities.getSales(fileName);
    var salesPrice = salesFileUtilities.getSaleCostsPerProduct(fields);

      var totalCostPerCategoryMap = {};

      var SalesPerProductsCategory = {

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

        for(var productName in salesPrice){
            var salesAmount = salesPrice[productName];
            var categoryName = SalesPerProductsCategory[productName];
            if(totalCostPerCategoryMap[categoryName] === undefined){
               totalCostPerCategoryMap[categoryName] = 0;
            };
            totalCostPerCategoryMap[categoryName] += Number(salesAmount) ;
        }
        console.log('=========================================================== below - Popular CategoryName + Qty PerCategory map');
        console.log(totalCostPerCategoryMap)
        return totalCostPerCategoryMap;
        
}

exports.findProductCategories = function(lines) {
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

           var prdouctCatNames = {};

  for (key in productCategories) {
    if (prdouctCatNames[productCategories[key]] === undefined){
        // console.log(productCategories[key])
     prdouctCatNames[productCategories[key]] = productCategories[key];    
     }
  }
   var cats = [];
   for(key in prdouctCatNames){
    cats.push(prdouctCatNames[key])
   }
          console.log(cats)
          return cats;
     
};

exports.getSalesPerProductsCategory = function(fileName,fields,salesPrice){
    var fields = salesFileUtilities.getSales(fileName);
    var salesPrice = salesFileUtilities.getSaleCostsPerProduct(fields);

      var totalCostPerCategoryMap = {};

      var SalesPerProductsCategory = {

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

        for(var productName in salesPrice){
            var salesAmount = salesPrice[productName];
            var categoryName = SalesPerProductsCategory[productName];
            if(totalCostPerCategoryMap[categoryName] === undefined){
               totalCostPerCategoryMap[categoryName] = 0;
            };
            totalCostPerCategoryMap[categoryName] += Number(salesAmount) ;
        }
        console.log('=========================================================== below - Popular CategoryName + Qty PerCategory map');
        console.log(totalCostPerCategoryMap)
        return totalCostPerCategoryMap;
        
}

