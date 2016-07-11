(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
let app = angular.module('VolunteerApp', ['ngRoute']);

//controllers
require('./controllers/login.js')(app);
// require('./controllers/available.js')(app);


//services
require('./services/login.js')(app);
// require('./services/events.js6')(app);

app.config(['$routeProvider', function ($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'LoginController',
      templateUrl: 'templates/login.html',
    })
    .when('/events', {
      controller: 'EventsController',
      templateUrl: 'templates/events.html',
    })
}])

},{"./controllers/login.js":1,"./services/login.js":3}],3:[function(require,module,exports){
module.exports = function(app){
  app.factory('LoginService', function($http){


    return {
      createUser: function(name,password){

        $http({
          method: 'POST',
          //server will change when we have a backend server
          url: '/api/login',
          data: {
            username: name,
            password: password,
          }
        })
      }

    }


  })
}

},{}]},{},[2])