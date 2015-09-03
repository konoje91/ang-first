'use strict';

/* Controllers */

var musicsControllers = angular.module('musicsControllers', []);

musicsControllers.controller('ReleaseListCtrl', function($scope, $http) {
	$scope.data
	,$scope.pagedItems  = []
	,$scope.sortingOrder = ''
	,$scope.filteredItems  = []
	,$scope.reverse = true
	,$scope.currentPage = 0
	,$scope.maxSize = 3;
	
	$http.get('releases/release-list.json').success(function(data) {
		$scope.data = data;

      	$scope.pagination();
    });

    $scope.pagination = function () {

    	var models = $scope.data;
    	        
        for (var i = 0; i < models.length; i++) {
            if (i % $scope.maxSize === 0) {
                $scope.pagedItems[Math.floor(i / $scope.maxSize)] = [ models[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.maxSize)].push(models[i]);
            }
        }
    };

	$scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };
    
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
            $scope.currentPage++;
        }
    };

    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };

    $scope.range = function (start, end) {
        var ret = [];
        if (!end) {
            end = start;
            start = 0;
        }
        for (var i = start; i < end; i++) {
            ret.push(i);
        }
        return ret;
    };
});

musicsControllers.controller('MusicDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
  	$scope.musicId = $routeParams.musicId;
    $http.get('releases/' + $routeParams.musicId + '.json').success(function(data) {
      $scope.musicRelease = data;
    });
   }]);