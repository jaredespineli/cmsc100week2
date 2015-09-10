var should = require('should-http'),
	request = require('supertest');
	
describe("student", function(){ //creating a test case for find
	var url = "localhost:5000";
	describe("find()", function(){
		it("should retrieve all student records", function(done){
			request(url).get('/students').end(function(err,res){ //error handling
				if(err)throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Object).and.have.lengthOf(10);
				//res.body.should.be.an.instanceOf(Array);
				res.body.should.have.properties(["id", "studno", "name"]);//pwede pa nito ireturn yung dating object
				done();
			});	
		});
		
		describe("insert", function(){
		var url = "localhost:5000";
		describe("insert()", function(){	
			it("should return newly created record", function(done){
				request(url).post('/students').send({'studno':'2013-12345','name':'Betel'}).end(function(err,res){ //error handling
				if(err)throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Object).and.have.property(["id", "studno", "name"]).and.should.not.be.empty;
				res.body.studno.should.have.a.lengthOf(10); 
				res.body.should.have.keys("id", "stdno", "name");	
				done();
					});
				});
			});
		});	
	});	
});	
