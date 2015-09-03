'use strict';

/* App Module */

var phonecatApp = angular.module('musicsApp', [
  'ngRoute',
  'musicsControllers'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/releases', {
        templateUrl: 'tepmlates/release-list.html',
        controller: 'ReleaseListCtrl'
      }).
      when('/releases/:musicId', {
        templateUrl: 'tepmlates/release-detail.html',
        controller: 'MusicDetailCtrl'
      }).
      otherwise({
        redirectTo: '/releases'
      });
  }]);
