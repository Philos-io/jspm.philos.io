import angular from 'angular';
import 'angular-route';
import Header from './directives/header.directive';
import configuration from './configuration/core.routes';
import CoreController from './controllers/core.controller';

angular.module('philos.core', ['ngRoute'])
	.config(configuration)
	.controller('CoreController', CoreController)
	.directive('philosNavBar', Header);
	