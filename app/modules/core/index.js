import angular from 'angular';
import 'angular-route';
import Header from './directives/header.directive';


angular.module('philos.core', [])
	.directive('philosNavBar', Header);
	