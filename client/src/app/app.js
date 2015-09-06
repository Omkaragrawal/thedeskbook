require('angular');
require('../env/dev.js');
require('angular-ui-router');
require('angular-aria');
require('angular-animate');
require('angular-material');
require('angular-messages');
require('./components/landing/landing.js');
require('./components/wall/wall.js');
var app = angular.module('theDeskBook', ['theDeskbook.config','ui.router','ngMaterial','theDeskBook.landing','ngMessages','theDeskBook.wall']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('whiteTheme')
    .primaryPalette('yellow')
	.backgroundPalette('grey');
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
	})
	.state('wall', {
		url: "/home",
		views : {
			"" : {
				templateUrl:"app/components/wall/wall.html"
			},
			"header@wall":{
				templateUrl:"app/shared/header/header2.html"
			}
		}
	});
});