app.controller('sessionController', ['$scope', '$route', '$location', '$routeParams', 'sessionFactory', function(scope, route, loc, routeParam, sessFact){
	scope.curr_user = null

	scope.login = function(){
		if(!scope.loginInstance || !scope.loginInstance.name){
			alert('You must have missed a field')
		}else{
			sessFact.login(scope.loginInstance)
		}
	}
	sessFact.getCurUser(function(data){
		scope.curr_user = data
		if(!scope.curr_user){
			loc.url('/login')
		}
	})


}])