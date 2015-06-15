export default function configuration($routeProvider){

	$routeProvider
		.when('/', {
			controller: 'CoreController',
			controllerAs: 'core',
			templateUrl: './app/modules/core/views/home.view.html'
		});

}

configuration.$inject = ['$routeProvider'];