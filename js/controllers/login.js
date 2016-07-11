module.exports = function (app){
  app.controller('LoginController', ['$scope', '$http', '$location', 'LoginService', function ($scope, $http, $location, LoginService){
    $scope.name="";
    $scope.password="";

    $scope.login = function(){
      console.log(`${$scope.name}`);
      LoginService.createUser($scope.name,$scope.password);
      $location.path('/events');

    }
  }])
}
