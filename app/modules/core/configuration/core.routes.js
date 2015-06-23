export default function configuration($routeProvider, $locationProvider){

	$locationProvider.hashPrefix('!');
  	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/', {
			controller: 'CoreController',
			controllerAs: 'core',
			templateUrl: './app/modules/core/views/home.view.html'
		});

}

configuration.$inject = ['$routeProvider', '$locationProvider'];