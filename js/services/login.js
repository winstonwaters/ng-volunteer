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
