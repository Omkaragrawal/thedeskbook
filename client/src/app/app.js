require('angular');
require('angular-ui-router');
require('angular-aria');
require('angular-animate');
require('angular-material');
var app = angular.module('theDeskBook', ['ui.router','ngMaterial']);

app.controller('MainController', function($scope) {
    $scope.message = 'Angular Works!';
});

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('whiteTheme')
    .primaryPalette('yellow');// specify primary color, all
                            // other color intentions will be inherited
                            // from default
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
				templateUrl:"app/shared/header/header1.html"
			}
		}
	});
});