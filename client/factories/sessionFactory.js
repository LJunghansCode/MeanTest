app.factory('sessionFactory', ['$http', '$location', function(http, loc){
	var factory = {};
	factory.login = function(user){
		http.post('/login', user).then(function(returned_data){
			if(returned_data){
				curr_user = returned_data.config.data;
				loc.url('/home')
			}
		})
	}
	 factory.getCurUser = function(callback){
        http.get('/getcuruser').then(function(output){
            callback(output.data)
        })
    }




	return factory;

}])