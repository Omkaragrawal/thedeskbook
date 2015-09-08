angular.module('theDeskBook.wall',[])
.controller('wallCtrl',['wallFactory',function(wallFactory){
	var vm = this;
	vm.feeds = [];
	vm.fetchFeed = function(){
		wallFactory.fetchFeed().then(function(data){
			if(data.error){
				//handle error
			} else {
				vm.feeds = data.message;
			}
		});
	};
	vm.fetchFeed();
}])
.factory('wallFactory',['$http','server','apis',function($http,server,apis){
	return {
		fetchFeed: function(){
			return $http.get(server.baseUrl+apis.feed).then(function(data){
				return data.data;
			},
			function(error){
				console.log('error occured');
			});
		}
	};
}]);