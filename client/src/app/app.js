require('angular');
require('angular-ui-router');
var app = angular.module('theDeskBook', ['ui.router']);

app.controller('MainController', function($scope) {
    $scope.message = 'Angular Works!';
});