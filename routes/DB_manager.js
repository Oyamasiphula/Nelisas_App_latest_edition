exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) 
			return next(err);
		connection.query('SELECT * FROM Products_td', [], function(err, results) {
        	if (err) return next(err);

    		res.render( 'home', {
    			products : results
    		});
      });
	});
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){

		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
            description : input.description,
        };

		if (err) 
			return next(err);
		
		connection.query('insert into Products_td set ?', data, function(err, results) {
        	if (err)
              console.log("Error inserting : %s ",err );
         
          	res.redirect('/products');
      	});
	});
};

exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){

		connection.query('SELECT * FROM Products_td WHERE id = ?', [id], function(err,rows){
			if(err){
    			console.log("Error Selecting : %s ",err );
			}

			res.render('edit',{page_title:"Edit Customers - Node.js", data : rows[0]});      
		}); 
	});
};

exports.update = function(req, res, next){

	var data = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    req.getConnection(function(err, connection){
    	connection.query('UPDATE Products_td SET ? WHERE id = ?', [data, id], function(err, rows){
    		
    		if (err){
              console.log("Error Updating : %s ",err );
    		}
          	res.redirect('/products');
    	});
    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){

		connection.query('DELETE FROM Products_td WHERE id = ?', [id], function(err,rows){
			if(err){
    			console.log("Error Selecting : %s ",err );
			}
			res.redirect('/products');
		});
		 
	});
};