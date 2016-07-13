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
