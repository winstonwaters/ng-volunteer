module.exports = function (app){
  app.controller('AvailableController', ['$scope', '$http', '$location', 'EventService', function ($scope, $http, $location, EventService){

    $scope.events=[{
    	"name": "Yard Sale-a-palooza",
    	"date": "December 24, 2016",
    	"host": {
    		"name": "Salvation Army",
    		"num_events": 6
    	}
    }, {
    	"name": "Phone call-a-thon",
    	"date": "October 11, 2016",
    	"host": {
    		"name": "Phone Savers",
    		"num_events": 16
    	}
    }];


    // $scope.reg = function(){
    //   console.log(`${$scope.name}`);
    //   LoginService.createUser($scope.name,$scope.password);
    //   $location.path('/events');
    //
    // }
    
  }]);
}
