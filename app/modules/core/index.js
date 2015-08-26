import angular from 'angular';
import 'angular-route';

// Routes
import configuration from './configuration/core.routes';

// Controllers
import CoreController from './controllers/core.controller';

// Directives
import philosMainDirective from './directives/philosMain';
import philosHeaderDirective from './directives/philosHeader';

angular.module('philos.core', ['ngRoute'])
	.config(configuration)
	.controller('CoreController', CoreController)
	.directive('philosNavBar', philosHeaderDirective)
	.directive('philos', philosMainDirective);
	