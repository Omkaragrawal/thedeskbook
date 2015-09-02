require('angular');
require('angular-ui-router');
var app = angular.module('theDeskBook', ['ui.router']);

app.controller('MainController', function($scope) {
    $scope.message = 'Angular Works!';
});

app.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/");
	
	$stateProvider
	.state('landing', {
		url: "/",
		views : {
			"" : {
				templateUrl:"app/components/landing/landing.html"
			},
			"header@landing":{
				template:"YOOOO"
			}
		}
	});
});