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
        console.log(productCategories[key])
     prdouctCatNames[productCategories[key]] = productCategories[key];    
     }
  }
   var cats = [];
   for(key in prdouctCatNames){
    cats.push(prdouctCatNames[key])
   }
          return cats;
     
};