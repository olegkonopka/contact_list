angular.module('app', []).controller("AppCtrl", function($scope, $http){
  console.log("hello from controller");
  $scope.refresh = function(){
    $http.get('/contactlist')
      .success(function(response){
        console.log('I taked data');
        $scope.contactlist = response;
        $scope.contact = '';
      });
  };

  $scope.refresh();
  $scope.addContact = function(){
    console.log($scope.contact);
    $http.post('/contactlist', $scope.contact)
      .success(function(response){
        console.log(response);
        $scope.refresh();
      })
  };

  $scope.remove = function(id){
    console.log(id);
    $http.delete('/contactlist/' + id)
      .success(function(response){
        $scope.refresh();
      });
  };

  $scope.edit = function(id){
    console.log(id);
    $http.get('/contactlist/' + id)
      .success(function(response){
        $scope.contact = response;
      });
  };

  $scope.updateContact = function(){
    console.log($scope.contact._id);
    $http.put('/contactlist/' + $scope.contact._id, $scope.contact)
      .success(function(response){
        $scope.refresh();
      });
  };

  $scope.deselect = function(){
    $scope.contact = '';
  };
});