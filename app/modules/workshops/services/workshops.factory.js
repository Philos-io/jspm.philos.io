export default class WorkshopFactory{

	constructor($http){
		this.http = $http;
	}


	getWorkshops(){
		return this.http.get('http://localhost:3000/api/workshops');
	}
}


WorkshopFactory.$inject = ['$http'];