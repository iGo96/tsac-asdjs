function sumArray(array){
	//Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo. 
	//iterativo
	i = 0;
	while ((i<array.length)&&(array[i]>=0)){
		array += array[i];	
		i++;
	}
	return array;
}

function sumArray(array){
	//Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo. 
	//ricorsivo
	if (array[i]>=0){
		return array[i] + sumArray(array[i+1]);
	}
	else{
		return array;
	}
}
