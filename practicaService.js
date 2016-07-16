(function(){
	"use strict";
	var appPractica = angular.module('appPractica');
	appPractica.service('datoService', function(){
		this.datos = [{
			nombre: "nombre",
			apellido: "apellido",
			edad: "edad",
			telefono: "telefono"
		}];
	});
})();