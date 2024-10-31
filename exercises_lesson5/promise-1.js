let promise = new Promise(function(resolve, reject){
	let a = 1+1;
	if (a == 3){
		resolve('Success');
	} else {
		reject('Failure');
	}
});

// Then call the promise
promise.then((message) => {
    console.log('This is in the then: ' + message);
 }).catch((error) => {
    console.log('Error', error);
 })
 