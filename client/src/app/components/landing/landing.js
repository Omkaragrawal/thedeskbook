angular.module('theDeskBook.landing',[])
.controller('landingController',['landingFactory',function(landingFactory){
	var vm = this;
	vm.registerData = {
		name:'',
		email:'',
		password:''
	};
	vm.register = function(){
		console.log(vm.signupform.$valid);
		if(vm.signupform.$valid){
			var payload = {
				user_email:vm.registerData.email,
				user_password:vm.registerData.password,
				user_name:vm.registerData.name
			};
			landingFactory.registerUser(payload).then(function(data){
			
				if(data.error){
					//error case
					console.log(data.message);
				} else {
					//next route
				}
			});
		}else {
			console.log('error');
		}
	};
}])

.factory('landingFactory',['$http','server','apis',function($http,server,apis){
	return {
		registerUser: function(payload){
			console.log('http://'+server.baseUrl+apis.register);
			return $http.post(server.baseUrl+apis.register,payload).then(function(data){
				return data.data;
			},
			function(error){
				console.log('error occured');
			});
		}
	};
}]);