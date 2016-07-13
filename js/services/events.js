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
        addedevent.remove(event);

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
      }

    };


  }]);
};
