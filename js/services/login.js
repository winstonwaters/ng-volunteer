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
