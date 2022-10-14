let tokens = new Promise(function(resolve, reject) {
	resolve("You have enough tokens");
});

tokens.then(function successValue(result) {
	console.log(result);
});
