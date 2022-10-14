let promise = new Promise(function (resolve, reject) {
setTimeout(function() {
	resolve("Promise Resolved")}, 4000);
  
});

async function asyncFunc() {

let result = await promise;
console.log(result);
console.log("Javascript");
}

asyncFunc();
