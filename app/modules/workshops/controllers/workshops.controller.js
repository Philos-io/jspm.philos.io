export default class WorkshopsController{
	constructor(WorkshopFactory){

		WorkshopFactory.getWorkshops()
			.then((response) => {
				this.workshops = response.data.workshops;
			});
	}

}


WorkshopsController.$inject = ['WorkshopFactory'];