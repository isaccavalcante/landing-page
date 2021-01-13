export default function ApiResource($resource) {
	return $resource('http://localhost:5000/subscribe', {}, {
		subscribe: {
			url: 'http://localhost:5000/subscribe',
			method: 'POST',
			isArray: false
		}
	});
}

ApiResource.$inject = ['$resource'];