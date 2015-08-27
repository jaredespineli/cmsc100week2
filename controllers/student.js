var db = require(__dirname + '/../lib/mysql'); //directory kung nasaan si mysql.js... pang-connect sa database

exports.find = function(req,res,next){
	db.query("SELECT * FROM student", //query from the database... parameters(sql statement, error handling)
		function(err, rows){
		if(err) return next(err);
		res.send(rows);
		//res.send('Hello World!');
		});
}
exports.findOne = function(req,res,next){
	db.query("SELECT * FROM student WHERE id=?",[req.params.id],  //request.parameter.id
	function(err, rows){
	if(err) return next(err);
	if(rows.length === 0) //walng naretrieve
		res.status(404).send('Student not found!');
	res.send(rows[0]);
	});	 //link: http://0.0.0.0:5000/students/1
};
	
exports.insert = function(req,res,next){ //insert
	db.query("INSERT INTO student (studno, name) VALUES(?,?)",[req.body.studno, req.body.name],
	function(err, rows){
	if(err) return next(err);
		res.send(rows[0]);
	});
};

exports.update = function(req,res,next){
	db.query("UPDATE student SET ? WHERE id=?",[req.body, req.params.id],
		function(err, rows){
		if(err) return next(err);
		res.send(rows[0]);
	});
};

exports.remove = function(req,res,next){
	db.query("DELETE FROM student WHERE id=?",[req.params.id],
		function(err, rows){
		if(err) return next(err);
		res.send(rows[0]);
	});
};

