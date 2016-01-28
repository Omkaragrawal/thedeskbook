angular.module('theDeskBook.login',[])
.controller('loginCtrl',['loginFactory',function(loginFactory){
	var vm = this;
	vm.loginData = {
		user_email:"",
		user_password:""
	};
	vm.loginUser = function(){
		if(vm.loginform.$valid){
			loginFactory.loginUser(vm.loginData).then(function(data){			
				if(data.error){
					//error case
					console.log(data.message);
				} else {
					//setup login
					//next route
				}
			});
		}else {
			console.log('error');
		}
	};
}])

.factory('loginFactory',['$http','server','apis',function($http,server,apis){
	return {
		loginUser: function(payload){
			console.log('http://'+server.baseUrl+apis.login);
			return $http.post(server.baseUrl+apis.login,payload).then(function(data){
				return data.data;
			},
			function(error){
				console.log('error occured');
			});
		}
	};
}]);