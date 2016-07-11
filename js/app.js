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
