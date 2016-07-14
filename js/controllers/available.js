module.exports = function (app){
  app.controller('AvailableController', ['$scope', '$location', 'EventService', 'LoginService', function ($scope, $location, EventService, LoginService){

    $scope.name = LoginService.getUserName();
    $scope.list = EventService.getEvent();
    $scope.schedule = EventService.addEvent();
    $scope.pageNumber = 1;
    $scope.itemsPerPage = 2;


    //pagination still in the works


    $scope.games = EventService.getPage($scope.pageNumber, $scope.itemsPerPage);

    $scope.prev = function(){
      $scope.pageNumber = $scope.pageNumber - 1;
      $scope.games = EventService.getPage($scope.pageNumber, $scope.itemsPerPage)
      $scope.list = EventService.getPage($scope.pageNumber, $scope.itemsPerPage);

    };

    $scope.next = function(){
      $scope.pageNumber = $scope.pageNumber + 1;
      $scope.games = EventService.getPage($scope.pageNumber, $scope.itemsPerPage)
      $scope.list = EventService.getPage($scope.pageNumber, $scope.itemsPerPage);
    };



    $scope.add = function(option){
      console.log('CLICKING', option.name);
      EventService.addEvent(option);
      $location.path('/events');
    }

  }]);
}
