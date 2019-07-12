var sep5 = angular.module("sep5",[]);
sep5.controller("ejemplo",function($scope){
	$scope.multiplicacion = function(){
		$scope.resultado = 8*8;
	}
	$scope.suma = function(){
		$scope.total = 8+8;
    }
    $scope.resta = function(){
		$scope.dato = 8-8;
    }
    $scope.divicion = function(){
		$scope.igual= 8/8;
    }
})