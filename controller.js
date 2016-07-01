var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.myFunc=function(){
  $http.get("welcome.json").then(function (response) {
      $scope.myTxt = response.data.records;
  });
  }
  $scope.myFunc1=function(){
	  if($scope.mySearch=== undefined)
	  {
		$scope.myTxt="";
	  }else{
	  }
  }
});