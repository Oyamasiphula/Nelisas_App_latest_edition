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

  for (catName in productCategories) {
    if (prdouctCatNames[productCategories[catName]] === undefined){
     prdouctCatNames[productCategories[catName]] = productCategories[catName];    
     }
  }
   var cats = [];
   for(catName in prdouctCatNames){
    var categories = {
                    categoryName: prdouctCatNames[catName]
                    }

    cats.push(categories);
   }
          return cats;


          };



