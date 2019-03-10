(function () {
'use strict';

angular.module('firstOne', [])
.controller('BoxElem', BoxElem);

BoxElem.$inject = ['$scope'];
function BoxElem($scope) {
  $scope.name = "";
  $scope.totalValue ="";

  $scope.submitt = function () {
  var stringy= $scope.name;
  var updd= stringy.replace(/,,/g, ",");
  var numero=updd.split(",").length;
	  if($scope.name == ""){
	  	$scope.totalValue ="Please enter data first";
	  }
	  else if( numero <=3){
	  	$scope.totalValue ="Enjoy!";
	  }
	  else if(numero>=4 ){
	  	$scope.totalValue ="Too much!";
	  }
  };

  
}

})();
