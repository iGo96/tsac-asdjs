function sum(a,b){
	//Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri 
	//compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a, 
	//calcolare la somma nell’intervallo [b,a] 
	//Esempio:
	//sumInterval(3, 5) => 12 
	//sumInterval(5, 3) => 12 
	//itterativo
	if (b>a){
		c=a;
		a=b;
		b=c;
	}
	for (i=a;i<=b;i++){
		sum = a + a+1;
	}
	return a;
}
