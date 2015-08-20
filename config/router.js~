var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');


module.exports = function(router){ //lahat ng nakalagay sa kaniya ay exportable functions, used to export functions
	router.route('/students')
		.get(student.find); //hahanapin sa student.js yung method na find

	router.route('/teachers')
		.get(teacher.view);
		
	router.route('/teachers')
		.post(teacher.add);
		
	router.route('/teachers')
		.put(teacher.update);
	
	router.route('/teachers')
		.delete(teacher.delete);
		
	return router;
};


