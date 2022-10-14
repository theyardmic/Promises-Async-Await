let blc = 5;
let txn = new Promise(function(resolve, reject) {
 if (blc < 10) {
   resolve("Your Balance is too low!");
 }
    else {
      reject("Sufficient balance available!");
    }
  
});
