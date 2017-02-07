function generarNumero(){

	//Número máximo
	var max = 100;

	//Número mínimo
	var min = 1;

	//Número aleatorio
	var numero_secreto = Math.random() * (max-min)+min;
	//Convertimos el número a entero
	numero_secreto = parseInt(numero_secreto);

	console.log(numero_secreto);

	var mensaje = "Introduce un número par adivinar el número mágico (El 0 finaliza el programa)";

	while(true){
		var numero_usuario = prompt(mensaje, "0");
		numero_usuario = parseInt(numero_usuario);

		if(numero_usuario === numero_secreto){
			alert("¡Ganaste! Adivinaste el número secreto");
			break;
		}else if (numero_usuario === 0) {
			break;
		}else if (numero_usuario > numero_secreto) {
			mensaje = "Lo sentimos, el número que ingresaste es mayor al número mágico";
		}else if (numero_usuario < numero_secreto) {
			mensaje = "Lo sentimos, el número que ingresaste es menor al número mágico";
		}
	}
}