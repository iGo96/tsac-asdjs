/**
 * Created by igic on 04/12/15.
 */
function initialArray() {
    var seed = 1;
    function random() {
        var x = Math.sin(seed++) * 10000;
        return Math.floor(x);
     }

    var a = [];
    for(var i = 0; i < 10000; ++i) {
        a.push(random());
    }
    return a;
}

function checkInitialArray(){
	var a = initialArray(); 
	var tot = 0;
	for (var i = 0; i < a.length; i++)
		tot+=a[i];
	return tot == 11340;
}

/* Esercizio 1
 * Dato l’array A creato dalla funzione initialArray() sviluppare un algoritmo​ ricorsivo non di coda​ in javascript che
 * restituisca il numero di elementi presenti in A che corrispondono al valore ​5070​ */

function find5070(a) {
    if (a.length==0){
        return 0;
    }
    else {
        if (a[0] == 5070)
            return find5070(a.slice(1)) + 1;
        else
            return find5070(a.slice(1));
    }
}

/* Esercizio 2
 * Dato l’array a creato dalla funzione initialArray() sviluppare un algoritmo in javascript che
 * restituisca la radice quadrata della somma dei quadrati dei soli elementi positivi (>= 0) pari.
 * Si implementi l’agoritmo utilizzando almeno una volta tutti i seguenti metodi dell’oggetto
 * Array: ​filter​, ​map​ e ​reduce. */

function sqrtSumPosEvenNum(a){ //non sapevo che altro nome dare
    var res = a.filter(
        function (val){
            if (val % 2 == 0 && val >= 0) {
                return val;
            }
        }
    ).map(
    	function(val){
    		return Math.pow(val, 2)
    	})
    .reduce(
    	function(acc, val){
    		return acc + val;
    	}
    );
    return Math.sqrt(res);
}

// Esercizio 3

function Stack() {
    this.a = [];
}

Stack.prototype.push = function(e) {
    this.a.push(e);
}

Stack.prototype.pop = function() {
    return this.a.pop();
}

Stack.prototype.peek = function() {
    return this.a[this.a.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.a.length == 0;
}

function expressionResolver(expression) {
	var v = new Stack(); //numeric values
	var s = new Stack(); //operators
	var element = expression.split(" "); //splits every space
	
	for (var i = 0; i < element.length; i++){ //lists the array
		if (element[i] != ")") {
			if ((element[i] == "+")||(element[i] == "-")||
				(element[i] == "*")||(element[i] == "/")||(element[i] == "(")) {	
					s.push(element[i]);
			}
			else {
				v.push(element[i]);
			}
		}
		else {
			//faccio qualcosa

		}
	}
	/*  ---- TEST ----
	while(element.length > 0){
		console.log(v.pop());
	}
	while(s.isEmpty){
		console.log(s.pop());
	}   ---- FINE TEST ---- */
	return v.pop();
}