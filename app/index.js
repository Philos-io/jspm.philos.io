import angular from 'angular';

import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';

// css files
import '../app/assets/css/philos.css'

import Config from './config';
import  core from './modules/core/';

var {
	bootstrap,
	module,
	element
} = angular;

var {
	appModule,
	workshopModule,
	coreModule
} = Config;

module(appModule, [coreModule]);

element(document).ready(function() {
    bootstrap(document.body, [appModule], {
		strictDi: true
	});
});