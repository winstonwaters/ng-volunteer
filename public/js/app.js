(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function (app){
  app.controller('AvailableController', ['$scope', '$location', 'EventService', 'LoginService', function ($scope, $location, EventService, LoginService){

    $scope.name = LoginService.getUserName();
    $scope.list = EventService.getEvent();
    $scope.schedule = EventService.addEvent();

    $scope.pageNumber = 1;
    $scope.itemsPerPage = 2;

    $scope.games = EventService.getGame($scope.pageNumber, $scope.itemsPerPage);



    $scope.add = function(option){
      console.log('CLICKING', option.name);
      EventService.addEvent(option);
      $location.path('/events');
    }

  }]);
}

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
module.exports = function(app){
  app.directive('event', function(){
    return {
      restrict: 'E',
      templateUrl: './directives/events.html',
      scope: {
        option: '=info',
        click: '=onClick'
      },
    // replace: true,
  };
});

};

},{}],4:[function(require,module,exports){
let app = angular.module('VolunteerApp', ['ngRoute']);

//controllers
require('./controllers/login.js')(app);
require('./controllers/available.js')(app);
// require('./controllers/registered.js')(app);


//services
require('./services/login.js')(app);
require('./services/events.js')(app);

//directives
require('./directives/events.js')(app);


app.config(['$routeProvider', function ($routeProvider){
  $routeProvider
    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'templates/login.html',
    })
    .when('/', {
      redirectTo: '/login',
    })
    .when('/events', {
      controller: 'AvailableController',
      templateUrl: 'templates/events.html',
    })
    .when('/users', {
      controller: 'LoginController',
      templateUrl: 'templates/users.html',
    })
    .otherwise({
      templateUrl: 'templates/login.html',
    })
}])

},{"./controllers/available.js":1,"./controllers/login.js":2,"./directives/events.js":3,"./services/events.js":5,"./services/login.js":6}],5:[function(require,module,exports){
module.exports = function(app) {
  app.factory('EventService', ['$http', function($http){
    let addedevent = [];
    let goingtogames = [];

    return {

      getEvent: function(){
        $http({
          method: 'GET',
          url: 'http://localhost:3000/api/events.json',
        }).then(function(response){
          console.log(response);
          console.log(response.data);
          let eventList = response.data
          angular.copy(eventList, addedevent)
        })
        return addedevent;
      },

      addEvent: function(event) {
        goingtogames.push(event);
        // addedevent.remove(event);

        //not working yet need backend
        $http({
          method: 'POST',
          // unsure which url to post to
          url: 'http://localhost:3000/api/events.json',
        }).then(function(response){
          console.log("bananananans", response);
          angular.copy(response.data, goingtogames);
        })
        return goingtogames;
      },

      getGame: function(pageNum, perPage){
        let start = (pageNum - 1) * perPage;
        return addedevent.slice(start, start + perPage);
      },

    };


  }]);
};

},{}],6:[function(require,module,exports){
module.exports = function(app){
  app.factory('LoginService', function($http){

    let username = "";
    let usersArray = [];

    return {

      getPerson: function(){
        $http({
          method: 'GET',
          url: 'http://localhost:3000/api/users.json',
        }).then(function(response){
          console.log("GETTTINGG", response);
          console.log(response.data);
          let userList = response.data
          angular.copy(userList, usersArray)
        })
        return usersArray;
      },

      createUser: function(name,password){
        username = name;
        console.log(username);

        $http({
          method: 'POST',
          //server will change when we have a backend server
          url: 'http://localhost:3000/api/users.json',
          data: {
            username: name,
            password: password,
          }
        }).then(function(response){
          console.log('this is what is returning', response);
          console.log(username);
        })
      },

      getUserName: function(){
        return username;
      },

    }


  })
}

},{}]},{},[4])