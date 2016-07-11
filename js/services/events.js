module.exports = function(app) {
  app.factory('EventService', ['$http', function($http){
    return {
      getEvent: function(eventId){
        $http({
          method: 'GET',
          url: '/api/event',
        })
      }
    }
  }])
}
