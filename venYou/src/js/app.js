/* eslint no-alert: 0 */

'use strict';
//
// Here is how to define your module
// has dependent on mobile-angular-ui
//
var app=angular.module('myFirstApp', [
   'ngRoute',
   'mobile-angular-ui'
]);
app.config(function($routeProvider, $locationProvider) {
   $routeProvider
   .when("/", {
      templateUrl : "src/home/home.html"
   });
   $locationProvider.html5Mode({enabled:true, requireBase:false});
});
app.controller('MainController', function($rootScope, $scope, $routeParams) {
   $scope.msg="Welcome to Tutorialspoint!"
});