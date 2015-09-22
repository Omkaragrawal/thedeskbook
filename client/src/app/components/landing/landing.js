angular.module('theDeskBook.landing',[])
.controller('landingController',['landingFactory','$mdToast' ,function(landingFactory, $mdToast){
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
					$mdToast.show($mdToast.simple().content(data.message).position('bottom left'));
					console.log(data.message);
				} else {
					$mdToast.show($mdToast.simple()
									.content('We have droped in an email in your inbox, please click on the confirmation link to complete registeration.')
									.position('bottom left')
									.action('OK').hideDelay(0)
								);
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