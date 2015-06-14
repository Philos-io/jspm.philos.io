import angular from 'angular';
import Config from './config/index';
import './modules/core/index';
import './modules/workshops/index';
import $ from 'jquery';
import 'materialize';


var {
	bootstrap
} = angular;

var {
	appModule,
	workshopModule,
	coreModule
} = Config;

angular.module(appModule, [workshopModule, coreModule]);

var node = document.getElementById('wrapper');

angular.element(document).ready(function() {
    bootstrap(node, [appModule], {
		strictDI: true
	});

	var clicked = false;

	// People, don't ever do this, it's a hack :(
	$(document).on('click', '.button-collapse', function(){
		if(!clicked){
			$(this).sideNav();
			$(this).click();
		}
	});
});