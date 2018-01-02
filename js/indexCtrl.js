export default class IndexController {
	constructor(api, toastr) {
		this.api = api;
		this.toastr = toastr;
	}

	subscribe(form) {
		this.api.subscribe(form).$promise.then(res => {
			let { message, code } = res;
			if (code === 0)
				this.toastr.success(message);
			else
				this.toastr.error(message);
		}).catch(err => {
			this.toastr.error(err, 'Erro');
		});
	}
}

IndexController.$inject = ['API', 'toastr'];

// indexController.$inject = ['API'];

// function indexController(api) {
// 	let mv = this;

// 	mv.subscribe = subscribe;

// 	function subscribe(form) {
// 		api.subscribe(form).$promise.then(res => {
// 			console.log(res);
// 		}).catch(err => {
// 			console.log(err);
// 		});
// 		// if (vehicle && vehicle.plate && vehicle.renavam) {
// 		// 	if (validate(vehicle.plate, vehicle.renavam)) {
// 		// 		vehicle.plate = normalizePlate(vehicle.plate);
// 		// 		mv.loading = true;
// 		// 		infractionResource.searchVehicle({
// 		// 				plate: vehicle.plate,
// 		// 				renavam: vehicle.renavam
// 		// 			}).$promise
// 		// 			.then((res) => {
// 		// 				$state.go('details-vehicle', {
// 		// 					vehicle: res
// 		// 				});
// 		// 			}).catch((err) => {
// 		// 				console.log(err.statusText);
// 		// 			}).finally(() => {
// 		// 				mv.loading = false;
// 		// 			});
// 		// 	} else {
// 		// 		console.log('Dados invalidos');
// 		// 	}
// 		// }
// 	}

// 	function validate(plate, renavam) {
// 		let plateRegex = /\b[A-Za-z]{3}\d{4}\b/;
// 		let renavamRegex = /\b\d+\b/;
// 		if (plateRegex.test(plate) && renavamRegex.test(renavam))
// 			return true;
// 		return false;
// 	}

// 	function normalizePlate(plate) {
// 		return plate.slice(0, 3).toUpperCase() + plate.slice(-4);
// 	}
// };
// }());