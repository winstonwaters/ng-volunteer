module.exports = function(app){
  app.directive('login', function(){
    return {
      restrict: 'E',
      templateUrl: './directives/users.html',
      scope: {
        loginusername: '=info',
      },
    // replace: true,
  };
});
};
