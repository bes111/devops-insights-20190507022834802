
var ConsoleModule = angular.module('ConsoleModule', ['ngRoute']);

ConsoleModule.config(['$routeProvider', '$locationProvider','$sceDelegateProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $sceDelegateProvider, $httpProvider) {
    $routeProvider.when('/', {
        templateUrl: '/partials/Bytown.html',
        controller: 'wcontroller',
        controllerAs: 'wcontroller'
    });
}]);

ConsoleModule.controller('wcontroller', ['$scope', '$http', '$routeParams', '$timeout', '$sce',
    function($scope, $http, $routeParams, $timeout, $sce) {
    
	/*
	var ibmdb = require("../") //require("ibm_db")
  	, conn = new ibmdb.Database()
  	, cn = "database=BLUDB;hostname=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;port=50001;uid=kjs22259;pwd=8^znzknkt021srgl"
  	;
  	// open a connection to the database
	conn.openSync(cn);
	var initial1 = "";
	initial1 = conn.querySync("SELECT ");
	*/
	
    $scope.somemessage = "Some weather";
    $scope.town1City = "";
    $scope.town1Weather = "";
    $scope.town = function(which) {

        var data = "";
        if(which === 1) {
            data = $scope.town1m;
        } else if(which === 2) {
            data = $scope.town2m;
        } else if(which === 3) {
            data = $scope.town3m;
        } else if(which === 4) {
            data = $scope.town4m;
        } 

            $http({
                method: "GET",
                url: '/api/v1/getWeather?town=' + data
            }).then( function(response) {
                if(which === 1) {
                    $scope.town1City = response.data.city;
                    $scope.town1Weather = response.data.weather;
                } else if(which === 2) {
                    $scope.town2City = response.data.city;
                    $scope.town2Weather = response.data.weather;
                } else if(which === 3) {
                    $scope.town3City = response.data.city;
                    $scope.town3Weather = response.data.weather;
                } else if(which === 4) {
                    $scope.town4City = response.data.city;
                    $scope.town4Weather = response.data.weather;
                } 
            });
         
    };
    
}]);