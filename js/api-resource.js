export default function ApiResource($resource) {
	return $resource('https://api.deploygram.com/subscribe', {}, {
		subscribe: {
			url: 'https://api.deploygram.com/subscribe',
			method: 'POST',
			isArray: false
		}
	});
}

ApiResource.$inject = ['$resource'];