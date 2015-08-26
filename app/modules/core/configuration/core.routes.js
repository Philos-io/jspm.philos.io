import mainTemplate from '../views/home.tpl.html'

function configuration($routeProvider, $locationProvider){

	// $locationProvider.hashPrefix('!');
 //  	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/', {
			controller: 'CoreController',
			controllerAs: 'core',
			template: mainTemplate
		});

}

configuration.$inject = ['$routeProvider', '$locationProvider'];

export default configuration;