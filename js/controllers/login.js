module.exports = function (app){
  app.controller('LoginController', ['$scope', '$http', '$location', 'LoginService', function ($scope, $http, $location, LoginService){

    $scope.name="";
    $scope.password="";
    $scope.usersArray = LoginService.getPerson();

    console.log('hihiihi');

    $scope.login = function(){
      console.log(`${$scope.name} is in the sys`);
      LoginService.createUser($scope.name,$scope.password);
      $location.path('/events');
    }


  }])
}
