function Stack(){
	this.myArray = [];
}

Stack.prototype.push = function(element) {
	//this.myArray[this.myArray.length] = element;
	this.myArray.push(element);
};

Stack.prototype.pop = function() {
	return this.myArray.pop();
};

Stack.prototype.peek = function() {
	return this.myArray[this.myArray.length-1];
};

Stack.prototype.isEmpty = function() {
	return this.myArray.length == 0;
};

function dec2bin(val){
	var sBin = new Stack(); //
	while (val > 0){
		sBin.push(val%2);
		val=Math.floor(val/2);
	}
	var retVal = "";
	while(!sBin.isEmpty()){
		retVal+=sBin.pop().toString();
	}
	return retVal;
}
