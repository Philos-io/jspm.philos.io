import angular from 'angular';
import 'angular-route';
import Configuration from './configuration/workshops.routes';
import WorkshopsController from './controllers/workshops.controller';
import WorkshopFactory from './services/workshops.factory';


angular.module('philos.workshops', ['ngRoute'])
	.service('WorkshopFactory', WorkshopFactory)
	.controller('WorkshopsController', WorkshopsController)
	.config(Configuration);