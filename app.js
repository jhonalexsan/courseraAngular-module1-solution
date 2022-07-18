(function () {
'use strict';

angular.module('lunchApp', [])
.controller('MyLunchController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.lunch = "";
  $scope.message = "";
  $scope.color = "";

  $scope.checkMuch = function () {
    var splitLunch = $scope.lunch.split( ",");
	var splitLunchSize = splitLunch.length;
	
	if(splitLunch == ""){
		$scope.message = "Please enter data first";	
		$scope.color = "blue";
	}else if(splitLunchSize<=3){
		$scope.message = "Enjoy!";
		$scope.color = "green";
	}else{
		$scope.message = "Too much!";	
		$scope.color = "red";
	}

  };

}

})();
