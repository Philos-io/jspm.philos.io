class CoreController{
	constructor(WorkshopFactory){
		WorkshopFactory.getWorkshops()
			.then((response) => {
				this.workshops = response.data.workshops;
			});
	}
}

CoreController.$inject = ['WorkshopFactory'];

export default CoreController;