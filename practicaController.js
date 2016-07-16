(function(){
	"use strict";
	var appPractica = angular.module('appPractica');
	appPractica.controller('mainControlador', function($scope, datoService){
		$scope.nombre = '';
		$scope.apellido = '';
		$scope.edad = '';
		$scope.telefono = 'telefono'; 
		$scope.dates = datoService.datos;
		$scope.mostrar = function(){

			var obj = {
				nombre: $scope.nombre,
				apellido: $scope.apellido,
				edad: $scope.edad,
				telefono: $scope.telefono
			}
			$scope.dates.push(obj);
				$scope.nombre = '';					/*PARA INICIALIZAR EN 0*/
				$scope.apellido = '';
				$scope.edad = '';
				$scope.telefono = ''; 
		};
	});
})();