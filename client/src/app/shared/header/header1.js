angular.module('theDeskBook.login',[])
.controller('loginCtrl',['loginFactory','$localStorage','$state','$mdToast',function(loginFactory,$localStorage,$state,$mdToast){
	var vm = this;
	$localStorage.$reset(); // reset all user data on 1st load
	vm.loginData = {
		user_email:"",
		user_password:""
	};
	vm.loginUser = function(){
		if(vm.loginform.$valid){
			loginFactory.loginUser(vm.loginData).then(function(data){			
				if(data.error){
					//error case
					$mdToast.show($mdToast.simple().content(data.message).position('bottom left'));
				} else {
					$localStorage.loggedIn = true;
					$state.go('wall');
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