	var categorylist = [];
 /*Below: we are converting our map to be an array so that we can return any value but more than one Val 
 which is what will makes us to simply work with our handlebars easy in terms of (helpers:{{mustache}}) it is so easy to wrap up and get values 
eg we can just syntactically type "{{this}}"" and by that we also prevent the [object object] functions output*/
	for(var key in totQtyPerProductsCategories){
		var prodCategoresIncTotQty = {	'categoryName': key,
        								'qty':totQtyPerProductsCategories[key]
		};	
		categorylist.push( key +", "+ totQtyPerProductsCategories[key]);	
	};
	
		
		//categorylist.;
		console.log(categorylist)