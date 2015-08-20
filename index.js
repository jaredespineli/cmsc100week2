var express = require('express');
var app = express();

/*app.get('/', function(req, res){ //req -- request, res -- represent http method
	res.send('Hello World!');
});
*/

//-----app.route() syntax------

/*app.route('/students')
	.get(function(req,res) {
	res.send('Get a student');
	})
	
	.post(function(req,res){
	res.send('Add a student');
	})
	
	.put(function(req,res){
	res.send('Update a student');
	});
*/


//adds additional modules
app.use(require('body-parser')()); //needed for input or payload, asks for input and stores it in repbody
app.use(require('method-override')()); //needed for put and delete http method
app.use(require(__dirname+'/config/router')(express.Router()));

var server = app.listen(5000, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Example app listening at http://%s:%s', host, port);

});
