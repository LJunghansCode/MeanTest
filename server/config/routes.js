let session = require('./../controllers/session.js')
let survey = require('./../controllers/survey.js')

module.exports = function(app){
	app.post('/login', function(req,res){
		session.login(req, res);
	})
	app.get('/getcuruser', function(req, res){
		session.getCurUser(req, res);
	})
	app.post('/newsurvey', function(req,res){
		survey.new_survey(req, res);
	})
	app.get('/allsurveys', function(req, res){
		survey.all_surveys(req, res);
	})
	app.get('/survey/:id', function(req, res){
		survey.one_survey(req, res);
	})
	app.get('/delete/:id', function(req, res){
		survey.delete_survey(req, res);
	})
	app.post('/vote1/:id', function(req, res){
		survey.vote1(req, res);
	})
	app.post('/vote2/:id', function(req, res){
		survey.vote2(req, res);
	})
	app.post('/vote3/:id', function(req, res){
		survey.vote3(req, res);
	})
	app.post('/vote4/:id', function(req, res){
		survey.vote4(req, res);
	})
	app.get('/logout', function(req, res){
        session.logOut(req, res)
    })
}