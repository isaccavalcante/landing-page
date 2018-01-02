export default function ApiResource($resource) {
	return $resource('https://api.minhasmultas.com.br/subscribe', {}, {
		subscribe: {
			url: 'https://api.minhasmultas.com.br/subscribe',
			method: 'POST',
			isArray: false
		}
	});
}

ApiResource.$inject = ['$resource'];