app.controller('surveyController', ['$scope', '$location', '$route','$routeParams', 'surveyFactory', 'sessionFactory', function(scope, loc, route, routeParams, survFact, sessFact){
	scope.new_survey = function(){
		if(!scope.newSurvey || !scope.newSurvey.option1 || !scope.newSurvey.option2|| !scope.newSurvey.option3 || !scope.newSurvey.option4 || !scope.newSurvey.question){
			scope.error = "Looks like you missed a field.... All are required for good surveys!"
		}else if(scope.newSurvey.question.length < 8){
			scope.error = "Please make sure you have a well reasoned question(At least 8 characters)"
		}else if(scope.newSurvey.option1.option.length < 3|| scope.newSurvey.option2.option.length < 3 || scope.newSurvey.option3.option.length < 3 || scope.newSurvey.option4.option.length< 3 ) {
			scope.error = "Options must be at least 3 characters long"}
		else{survFact.new_survey(scope.newSurvey)}
	}
	var all_surveys = function(){
		survFact.all_surveys(function(data){
			scope.all_surveys = data.data.surveys;
		})
	}
	sessFact.getCurUser(function(data){
		scope.curr_user = data
		if(!scope.curr_user){
			loc.url('/login')
		}
	})
	scope.vote1 = function(){
		survFact.vote1(scope.showOne._id)
	}
	scope.vote2 = function(){
		survFact.vote2(scope.showOne._id)
	}
	scope.vote3 = function(){
		survFact.vote3(scope.showOne._id)
	}
	scope.vote4 = function(){
		survFact.vote4(scope.showOne._id)
	}

	if(routeParams.id){
		survFact.getOne(routeParams, function(data){
			scope.showOne = data.data.survey;
		})
	}
	all_surveys();

}])