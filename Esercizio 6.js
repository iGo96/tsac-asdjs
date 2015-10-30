function div(dividendo,divisore){
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

function div(dividendo,divisore){
	//Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite 
	//l’utilizzo dei soli operatori somma e sottrazione. 
	//Esempio: 
	//div(5, 3) => 1 resto 2
	//ricorsivo
	var i=0;
	if(divisore<0)
		return [i,dividendo];
	else{
		i++;
		return dividendo - div(dividendo,divisore-1);
	}
}