function sumArray(array){
	//Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo. 
	//itterativo
	//spazio: O(1)
	//tempo: O(n)
	i = 0;
	while ((i<array.length)&&(array[i]>=0)){
		array += array[i];	
		i++;
	}
	return array;
}

function sumArrayR(array){
	//spazio: O(n)
	//tempo: O(n)
	if (array[i]>=0){
		return array[i] + sumArray(array.slice(1));
	}
	else {
		return array;
	}
}

//Per Tiziano;
function ex_1_I(array){
	return sumArray(array);
}
//Per Tiziano;
function ex_1_R(array){
	return sumArrayR(array);
}
/////////////////////////////////////////////////////////////////////////
function sumDisp(n){
	//Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari 
	//itterativo
	for (i=0;i<n;i++){
		
	}
}

function sumDispR(n){

}

//Per Tiziano;
function ex_2_I(n){
	return sumDisp(n);
}
//Per Tiziano;
function ex_2_I(n){
	return sumDispR(n);
}
/////////////////////////////////////////////////////////////////////////
function avg(array){
	//Dato un array di 10 elementi, calcolarne la media 
	//itterativo
	nVal = array.length;
	for(i=0;i<nVal);i++){
		array+=array[i];
	}
	return array/nVal;
}

function avgR(array){
	
}

//Per Tiziano:
function ex_3_I(array){
	return avg(array);
}
//Per Tiziano:
function ex_3_R(array){
	return avgR(array);
}
/////////////////////////////////////////////////////////////////////////
function sumInterval(a,b){
	//Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri 
	//compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a, 
	//calcolare la somma nell’intervallo [b,a] 
	//Esempio:
	//sumInterval(3, 5) => 12 
	//sumInterval(5, 3) => 12 

	//spazio: O(1)
	//tempo: O(n)
	if (b>a){
		var c=a;
		a=b;
		b=c;
	}
	for (i=a;i<=b;i++){
		sum = a + a+1;
	}
	return a;
}

function sumIntervalR(a,b){
	if (b>a){
		var c=a;
		a=b;
		b=c;
	}
	if (a>0) {
		return a+sumR(a--,b);
	}
	else {
		return a;
	}
}

//Per Tiziano:
function ex_4_I(a,b){
	return sumInterval(a,b);
}
//Per Tiziano:
function ex_4_R(a,b){
	return sumIntervalR(a,b);
}
/////////////////////////////////////////////////////////////////////////
function MultSum(a,b){
	//Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo 
	//operatore somma. 
	//Esempio: 
	//mult(2, 3) => 6 
	//itterativo
	if ((a=0)||b=0)){
		return 0;
	}
	else{
		for(i=0;i<b;i++){
			a+=a;
		}
	}
	return a;
}


function MultSumR(a,b){
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
function ex_5_I(a,b){
	return MultSum(a,b);
}
//Per Tiziano:
function ex_5_R(a,b){
	return MultSumR(a,b);
}
/////////////////////////////////////////////////////////////////////////
function DivSub(dividendo,divisore){
	//Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite 
	//l’utilizzo dei soli operatori somma e sottrazione. 
	//Esempio: 
	//div(5, 3) => 1 resto 2
	//itterativo
	var i=0;
	while((dividendo-divisore)>=0){
		dividendo-=divisore;
		i++;
	}
	return [i,dividendo]; //primo val: risultato ; secondo val: resto
}

function DivSubR(dividendo,divisore){
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
function ex_6_I(dividendo,divisore){
	return DivSub(dividendo,divisore);
}
//Per Tiziano:
function ex_6_R(dividendo,divisore){
	return DivSub(dividendo,divisore);
}
/////////////////////////////////////////////////////////////////////////
function pow(b,e){
	//Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli 
	//operatori somma, sottrazione e della funzione mult. 
	//.Esempio: 
	//pow(2, 3) => 8
	//spazio: O()
	//tempo:O()
	for (i=0;i<e;i++){
		b*=b;
	}	
	return b;
}

function powR(b,e){
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
function ex_7_I(b,e){
	return pow(b,e);
}
//Per Tiziano:
function ex_7_R(b,e)
{
	return powR(b,e);
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
			matrix[array[i]][array[j]; //???

		}
	}
}

function ArrayToMatrixR(array) {
	//spazio: O()
	//tempo:O()
	l = sqrt(array.length);
	for (i=0; i<l;i++) { //righe
		for (j=0;j<l;j++) { //colonne
			matrix[array[i]][array[j]; //???

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
