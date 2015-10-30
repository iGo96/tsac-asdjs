function pow(b,e){
	//Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli 
	//operatori somma, sottrazione e della funzione mult. 
	//.Esempio: 
	//pow(2, 3) => 8 
	//itterativo
	for (i=0;i<e;i++){
		b*=b;
	}	
	return b;
}

function pow(b,e){
	//Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli 
	//operatori somma, sottrazione e della funzione mult. 
	//.Esempio:
	//pow(2, 3) => 8
	//ricorsivo
	if(e>0) {
		return b*pow(b,e-1);
	}
	else {
		return b;
	}
}