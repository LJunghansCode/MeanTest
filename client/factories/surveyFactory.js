app.factory('surveyFactory', ['$http', '$location','$route', function(http, loc, route){
	var factory = {};
	factory.new_survey = function(survey){
		http.post('/newsurvey', survey).then(function(returned_data){
			if(returned_data){
				loc.url('/home')
			}
		})
	}
	factory.all_surveys = function(callback){
		http.get('/allsurveys').then(function(returned_data){
			callback(returned_data)
			
		})
	}
	factory.getOne = function(id, callback){
		http.get('/survey/' + id.id ).then(function(returned_data){
			callback(returned_data)
		})
	}
	factory.vote1 = function(id){
		http.post('/vote1/' + id).then(function(returned_data){
			if(returned_data){
				route.reload()
			}
		})
	}
		factory.vote2 = function(id){
		http.post('/vote2/' + id).then(function(returned_data){
			if(returned_data){
				route.reload()
			}
		})
	}
		factory.vote3 = function(id){
		http.post('/vote3/' + id).then(function(returned_data){
			if(returned_data){
				route.reload()
			}
		})
	}
		factory.vote4 = function(id){
		http.post('/vote4/' + id).then(function(returned_data){
			if(returned_data){
				route.reload()
			}
		})
	}


	return factory
}]);