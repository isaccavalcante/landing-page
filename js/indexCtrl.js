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

	validate(plate, renavam) {
		let plateRegex = /\b[A-Za-z]{3}-?\d{4}\b/;
		let renavamRegex = /\b\d+\b/;
		if (plateRegex.test(plate) && renavamRegex.test(renavam))
			return true;
		return false;
	}

	normalizePlate(plate) {
		return plate.slice(0, 3).toUpperCase() + plate.slice(-4);
	}
}

IndexController.$inject = ['API', 'toastr'];