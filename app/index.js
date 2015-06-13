import angular from 'angular';
import config from './config/index';

var {
	bootstrap
} = angular;

var {
	appModule
} = config;

angular.module(appModule, []);

var node = document.getElementById('wrapper');

bootstrap(node, [appModule], {
	strictDI: true
});