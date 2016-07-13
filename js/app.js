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
