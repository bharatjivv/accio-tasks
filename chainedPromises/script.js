//your JS code here. If required.
function getArrray() {
	return new Promise ((resolve) => {
		setTimeout(() => {
			resolve([1, 2, 3, 4]);
		}, 3000);
	})
}

function filterEvenNos (arr) {
	return new Promise((resolve) => {
		setTimeout(()=> {
			let evenArr = arr.filter(num => num%2 === 0)
			document.getElementById('output').textContent = evenArr.join(",");
			resolve(evenArr);
		}, 1000)
	})
}

function doubleArr(arr) {
	return new Promise ((resolve) => {
		setTimeout(()=> {
			let doubleArr = arr.map(num => num * 2);
			document.getElementById('output').textContent = doubleArr.join(",");
			resolve(doubleArr)
		}, 2000)
	})
}


getArrray()
	.then(filterEvenNos)
	.then(doubleArr)
	.catch( error => {
		document.getElementById('output').textContent = `Error Occured, ${error}`;
	})
