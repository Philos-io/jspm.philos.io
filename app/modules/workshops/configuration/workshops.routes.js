import angular from 'angular';
import 'angular-route';


function Configuration($routeProvider){

	$routeProvider
		.when('/', {
			controller: "WorkshopsController",
			controllerAs: "vm",
			templateUrl: './app/modules/workshops/views/workshop.view.html'
		});

}

Configuration.$inject = ['$routeProvider'];


export default Configuration;