function mult(a,b){
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


function mult(a,b){
	//Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo 
	//operatore somma. 
	//Esempio: 
	//mult(2, 3) => 6 
	//ricorsivo
	if((a=0)||(b=0)){
		return 0;
	}
	else if (b<0){
		return a;
	}
	else{
		return a + mult(a,b-1);
	}
}
