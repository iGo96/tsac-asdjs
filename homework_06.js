function merge(ar1, ar2){
	var res = [];
	var i1;
	var i2;
	
	while (i1 < ar1.length && i2 < ar2.length){
		if (ar[i1] < ar2[i2]) {
			res.push(ar1[i1]);
			i1++;
		}
		else {
			res.push(ar2[i2]);
			i2++;
		}
	}
	if(i1 < ar1.length) { 
		res.concat(ar1.slice[i1 + 1]);
	}
	if(i2 < ar2.length) {
		res.concat(ar2.slice[i2 + 1]);
	}
	
	return res;
}

function mergeSort(ar){
	if (ar.length == 1){
		return ar;
	}
	else {
		var l =  ar.length / 2;
		var left = ar.slice(0, Math.ceil(l));
		var right = ar.slice(Math.ceil(l));
		return merge(mergeSort(left), mergeSort(right));
	}
	
}
