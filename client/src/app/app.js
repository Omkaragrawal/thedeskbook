require('angular');
require('../env/dev.js');
require('angular-ui-router');
require('angular-aria');
require('angular-animate');
require('angular-material');
require('angular-messages');
require('ngstorage');
require('./components/landing/landing.js');
require('./shared/header/header1.js');
require('./components/wall/wall.js');
var app = angular.module('theDeskBook', ['theDeskbook.config','ui.router','ngMaterial','theDeskBook.landing','ngMessages','ngStorage','theDeskBook.wall','theDeskBook.login']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('whiteTheme')
    .primaryPalette('yellow')
	.backgroundPalette('grey');
});

app.run(['$rootScope', '$localStorage','$state',function($rootScope, $localStorage, $state){
	$rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams){
		console.log($localStorage.loggedIn);
		if(toState.name.indexOf('landing') === -1 && !$localStorage.loggedIn){ //Going on secure page and not logged in
			e.preventDefault();
			$state.go('landing');
		} else if(toState.name.indexOf('landing') !== -1 && !!$localStorage.loggedIn){ //Going on logged in page, when already logged in
			e.preventDefault();
			if(!!fromState.name){
				$state.go(fromState.name);
			}else {
				$state.go('wall');
			}
		}
	});
}]);

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