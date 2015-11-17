//Esercizio 1
//Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo.
//spazio: O(n)
//tempo: O(n)
function sumArray(array){
	var tmparray = [];
	a.every(function(x){
		if (x>0){
			tmparray[tmparray.length]=x;
		}
		return x>0;
	});
	
	return tmparray.reduce(
		function(acc,x){ 
			return acc + x;
	})
}

//Per Tiziano;
function ex_1_F(array){
	return sumArray(array);
}
/////////////////////////////////////////////////////////////////////////
function sumDisp(n){
	var a = new Array(n);
	var j = 1;
	for (var i = 0; i<n; i++){
		array[i] = j;
		j+=2;
	}
	return a.reduce((acc,x) => {return acc + x}, 0);
}

//Per Tiziano;
function ex_2_F(n){
	return sumDisp(n);
}
/////////////////////////////////////////////////////////////////////////
function avg(array){
	return array.reduce((acc, x) => {return acc+x}, 0);
}

//Per Tiziano:
function ex_3_F(array){
	return avg(array);
}
/////////////////////////////////////////////////////////////////////////
function sumInterval(a,b){
	if (b>a){
		var c=a;
		a=b;
		b=c;
	}
	var tot = 0;
	for (var i = a; i <= b; i++){
		tot+=a;
	}
	return tot;
}

//Per Tiziano:
function ex_4_F(a,b){
	return sumInterval(a,b);
}
/////////////////////////////////////////////////////////////////////////
function MultWithSum(a,b){
	//Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo 
	//operatore somma. 
	//Esempio: 
	//mult(2, 3) => 6 
	//ricorsivo
	if((a=0)||(b=0)){
		return 0;
	}
	else if ((b<0)||(a<0)){
		return "uno dei due numeri è uguale a 0";
	}
	else {
		return a + mult(a, b--);
	}
}

//Per Tiziano:
function ex_5_F(a,b){
	return MultWithSum(a,b);
}
/////////////////////////////////////////////////////////////////////////
function DivSub(dividendo,divisore){
	//Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite 
	//l’utilizzo dei soli operatori somma e sottrazione. 
	//Esempio: 
	//div(5, 3) => 1 resto 2
	//ricorsivo
	var i=0;
	if(divisore<0)
		return [i,dividendo];
	else {
		i++;
		return dividendo - div(dividendo,divisore-1);
	}
}
//Per Tiziano:
function ex_6_F(dividendo,divisore){
	return DivSub(dividendo,divisore);
}
/////////////////////////////////////////////////////////////////////////
function pow(b,e){
	//spazio: O()
	//tempo:O()
	if(e>0) {
		return b*pow(b,e-1);
	}
	else {
		return b;
	}
}
//Per Tiziano:
function ex_7_F(b,e)
{
	return pow(b,e);
}
/////////////////////////////////////////////////////////////////////////
function ArrayToMatrix(array) {
	//Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli 
	//oggetti in un array bidimensionale n x n
	//spazio: O()
	//tempo:O()
	l = sqrt(array.length);
	for (i=0; i<l;i++) { //righe
		for (j=0;j<l;j++) { //colonne
			//matrix[array[i]][array[j]; //???

		}
	}
}

function ArrayToMatrixR(array) {
	//spazio: O()
	//tempo:O()
	l = sqrt(array.length);
	for (i=0; i<l;i++) { //righe
		for (j=0;j<l;j++) { //colonne
			//matrix[array[i]][array[j]; //???

		}
	}
}

//Per Tiziano:
function ex_8_I(array) {
	return ArrayToMatrix(array);
}
//Per Tiziano:
function ex_8_R(array) {
	return ArrayToMatrixR(array);
}
/////////////////////////////////////////////////////////////////////////
