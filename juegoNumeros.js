const izquierda = 1;
const derecha	= 2;
const arriba	= 3;
const abajo		= 4;
const ninguna	= 0;

var colores={

	piezasPares		: "#ccbbbb",
	piezasImpares	: "#776666",
	numeroPares		: "#000000",
	numeroImpares	: "#000000",
	lineaSeparacion	: "#333333",
	hueco			: "#220011"
}

function pieza(){

	var x			= 0;
	var y				= 0;
	var numero			= 0;
	var numeroX			= 0;
	var numeroY			= 0;
	var color			= 0;
	var colorNumero		= 0;

}

var tamano={
	
	linea : 6,
	pieza : 100		
}

var frames={
	total : 0,
	maximo: 19,
	desplazamiento : 5
}

var hueco={

	x:0,
	y:0,
	anteriorX : 0,
	anteriorY : 0,
	numeroAnterior : 0,
	coordenada : 0
}


//Vertices arriba izquierda de las piezas en el contenedor, el numero del elemento es el numero de la pieza comenzando por 0
var coordenadasAbsolutas = {
	
	x : [0, tamano.pieza, 2*tamano.pieza, 3*tamano.pieza, 4*tamano.pieza, 0, tamano.pieza, 2*tamano.pieza, 3*tamano.pieza, 4*tamano.pieza, 0, tamano.pieza, 2*tamano.pieza, 3*tamano.pieza, 4*tamano.pieza, 0, tamano.pieza, 2*tamano.pieza, 3*tamano.pieza, 4*tamano.pieza, 0, tamano.pieza, 2*tamano.pieza, 3*tamano.pieza, 4*tamano.pieza],
	y : [0, 0, 0, 0, 0, tamano.pieza, tamano.pieza, tamano.pieza, tamano.pieza, tamano.pieza, 2*tamano.pieza, 2*tamano.pieza, 2*tamano.pieza, 2*tamano.pieza, 2*tamano.pieza, 3*tamano.pieza, 3*tamano.pieza, 3*tamano.pieza, 3*tamano.pieza, 3*tamano.pieza, 4*tamano.pieza, 4*tamano.pieza, 4*tamano.pieza, 4*tamano.pieza, 4*tamano.pieza]
}

function juego(){
	
	piezas = [];
	//numeros el numero del elemento es la posición, el valor que contiene es el núnero de la pieza
	var numero;
	var numeros	 = [30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30];
	var ocupados = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var x		= 0;
	var y		= 0;

	for(var i=0; i<=23; i++){
		
		numero=Math.floor(Math.random() * 25);
		if(ocupados[numero]==0){
			numeros[numero]=i+1;
			ocupados[numero]=1;
		}
		else{
			i--;
		}
	}


	canvas=document.getElementById("canvas");		
	ctx=canvas.getContext("2d");

	
	for(i=0; i<=24; i++){
		
		//agraga un nuevo objeto al arreglo
		piezas.push(new pieza);

		//obtiene x y y

		piezas[i].x	= x * tamano.pieza;
		piezas[i].y	= y * tamano.pieza;

		
		//El numero de la pieza
		piezas[i].numero = numeros[i];

		if(numeros[i] <= 9){
			piezas[i].numeroX = tamano.pieza * x + 40;
		}
		else{
			piezas[i].numeroX = tamano.pieza * x + 30;
		}

		//Coordenadas del numero dibujado
		piezas[i].numeroY		= y * 100 + 60;


		if(numeros[i] == 30){
			piezas[i].color	= colores.hueco;
			piezas[i].colorNumero = colores.hueco;
		}
		else if(numeros[i] % 2 == 0){
			piezas[i].color	= colores.piezasPares;
			piezas[i].colorNumero = colores.numeroPares;
		}
		else{
			piezas[i].color	= colores.piezasImpares;
			piezas[i].colorNumero = colores.numeroImpares;
		}


		x++;
		
		if(i==4 || i==9 || i==14 || i==19 ){
			y++;
			x=0;
		}

		
	}

	inicio();
}

function inicio(){
		
	window.canvas.addEventListener("click", clickear);

	dibujaTodo();
	
}

function clickear(ev){

	if(ev.offsetX == undefined || ev.pageX == undefined){ // para firefox
   		 alert("Tu navegador no reproduce este contenido, puedes usar Chrome para vizualizarlo"); 
   	}	

    clickX = ev.offsetX;
    clickY = ev.offsetY;

	console.log(clickY, clickX);


	//seleccionado;

	if(clickX > 0 && clickX < 100){

		if(clickY > 0 && clickY < 100){
				
			seleccionado = 0;				
		}
		else if(clickY > 100 && clickY < 200){
				
			seleccionado = 5;				
		}
		else if(clickY > 200 && clickY < 300){
				
			seleccionado = 10;					
		}
		else if(clickY > 300 && clickY < 400){
				
			seleccionado = 15;					
		}		
		else if(clickY > 400 && clickY < 500){
				
			seleccionado = 20;					
		}
	}

	else if(clickX > 100 && clickX < 200){

		if(clickY > 0 && clickY < 100){
				
			seleccionado = 1;				
		}
		else if(clickY > 100 && clickY < 200){
				
			seleccionado = 6;				
		}
		else if(clickY > 200 && clickY < 300){
				
			seleccionado = 11;					
		}
		else if(clickY > 300 && clickY < 400){
				
			seleccionado = 16;					
		}		
		else if(clickY > 400 && clickY < 500){
				
			seleccionado = 21;					
		}
	}


	else if(clickX > 200 && clickX < 300){

		if(clickY > 0 && clickY < 100){
				
			seleccionado = 2;				
		}
		else if(clickY > 100 && clickY < 200){
				
			seleccionado = 7;				
		}
		else if(clickY > 200 && clickY < 300){
				
			seleccionado = 12;					
		}
		else if(clickY > 300 && clickY < 400){
				
			seleccionado = 17;					
		}		
		else if(clickY > 400 && clickY < 500){
				
			seleccionado = 22;					
		}
	}

	else if(clickX > 300 && clickX < 400){

		if(clickY > 0 && clickY < 100){
				
			seleccionado = 3;				
		}
		else if(clickY > 100 && clickY < 200){
				
			seleccionado = 8;				
		}
		else if(clickY > 200 && clickY < 300){
				
			seleccionado = 13;					
		}
		else if(clickY > 300 && clickY < 400){
				
			seleccionado = 18;					
		}		
		else if(clickY > 400 && clickY < 500){
				
			seleccionado = 23;					
		}
	}


	else if(clickX > 400 && clickX < 500){

		if(clickY > 0 && clickY < 100){
				
			seleccionado = 4;				
		}
		else if(clickY > 100 && clickY < 200){
				
			seleccionado = 9;				
		}
		else if(clickY > 200 && clickY < 300){
				
			seleccionado = 14;					
		}
		else if(clickY > 300 && clickY < 400){
				
			seleccionado = 19;					
		}		
		else if(clickY > 400 && clickY < 500){
				
			seleccionado = 24;					
		}
	}


	
	direccion =	direccionMovimiento(seleccionado);

	if(direccion == izquierda){
			
		//console.log(piezas[seleccionado].numero + "debe de ir a la izquierda");	
		reproduccion = setInterval(function(){desplazamientoFrame(seleccionado, izquierda);}, 20);
		document.getElementById("canvas").removeEventListener("click", clickear);
	}
	else if(direccion == derecha){
		//console.log(piezas[seleccionado].numero + "debe de ir a la derecha");	
		reproduccion = setInterval(function(){desplazamientoFrame(seleccionado, derecha);}, 20);
		document.getElementById("canvas").removeEventListener("click", clickear);
	}
	else if(direccion == arriba){
		//console.log(piezas[seleccionado].numero + "debe de ir a la arriba");	
		reproduccion = setInterval(function(){desplazamientoFrame(seleccionado, arriba);}, 20);
		document.getElementById("canvas").removeEventListener("click", clickear);
	}
	else if(direccion == abajo){
		//console.log(piezas[seleccionado].numero + "debe de ir a la abajo");	
		reproduccion = setInterval(function(){desplazamientoFrame(seleccionado, abajo);}, 20);
		document.getElementById("canvas").removeEventListener("click", clickear);
	}
	else if(direccion == ninguna){
	}
}



function desplazamientoFrame(seleccionado, direccion){

	console.log("funcionando")
	
	if(direccion == izquierda){
		piezas[seleccionado].x			= piezas[seleccionado].x - frames.desplazamiento;
		piezas[seleccionado].numeroX	= piezas[seleccionado].numeroX - frames.desplazamiento;
	}

	else if(direccion == derecha){
		piezas[seleccionado].x			= piezas[seleccionado].x + frames.desplazamiento;
		piezas[seleccionado].numeroX	= piezas[seleccionado].numeroX + frames.desplazamiento;
	}
	else if(direccion == arriba){
		piezas[seleccionado].numeroY	= piezas[seleccionado].numeroY - frames.desplazamiento;
		piezas[seleccionado].y			= piezas[seleccionado].y - frames.desplazamiento;
	}
	else if(direccion == abajo){
		piezas[seleccionado].numeroY	= piezas[seleccionado].numeroY + frames.desplazamiento;
		piezas[seleccionado].y			= piezas[seleccionado].y + frames.desplazamiento;
	}

	
	dibuja(seleccionado);

		
	if(frames.total == frames.maximo){
	
		console.log(frames.total)

		var posicion30;

		window.canvas.addEventListener("click", clickear);
		clearInterval(reproduccion);
		frames.total = 0
		
		console.log(frames.total)
		
		//Obtiene la posicisión donde esta el hueco o donde piezas.numero == 30

		for(var elemento = 0; elemento <= 24; elemento++){				
			if(piezas[elemento].numero == 30){
				posicion30 = elemento;
				break;		
			}
		}


		//Pasa todos los atributos de la pieza a la nueva posición que era la del hueco, con hueco coordenada me refiero solo al numero de elemento en el contenedor
		piezas[posicion30].numero		= piezas[seleccionado].numero
		piezas[posicion30].x			= piezas[seleccionado].x;
		piezas[posicion30].y			= piezas[seleccionado].y;
		piezas[posicion30].numeroX		= piezas[seleccionado].numeroX
		piezas[posicion30].numeroY		= piezas[seleccionado].numeroY
		piezas[posicion30].color		= piezas[seleccionado].color;
		piezas[posicion30].colorNumero	= piezas[seleccionado].colorNumero;

		piezas[seleccionado].numero= 30;
		
		inicio();
	}

	else {
		frames.total++;		
	}
}


function dibuja(seleccionado){


	ctx.clearRect(coordenadasAbsolutas.x[seleccionado], coordenadasAbsolutas.y[seleccionado], tamano.pieza-(tamano.linea/2), tamano.pieza-(tamano.linea/2));

			
	ctx.beginPath();
	ctx.lineWidth = tamano.linea;
	ctx.strokeStyle = colores.lineaSeparacion;
	ctx.strokeRect(piezas[seleccionado].x, piezas[seleccionado].y, tamano.pieza-(tamano.linea/2), tamano.pieza-(tamano.linea/2));
	ctx.fillStyle = piezas[seleccionado].color;
	ctx.fillRect(piezas[seleccionado].x, piezas[seleccionado].y, tamano.pieza-(tamano.linea/2), tamano.pieza-(tamano.linea/2));
	ctx.closePath();
	ctx.stroke();	

	ctx.fillStyle= piezas[seleccionado].colorNumero;
	ctx.font = "30px Arial";
	ctx.fillText( piezas[seleccionado].numero.toString(), piezas[seleccionado].numeroX, piezas[seleccionado].numeroY);

}


function dibujaTodo(){
		

	for(var i=0; i<=24; i++){

		if(piezas[i].numero == 30){
			continue;
		}
		
		ctx.beginPath();
		ctx.lineWidth = tamano.linea;
		ctx.strokeStyle = colores.lineaSeparacion;
		ctx.strokeRect(piezas[i].x, piezas[i].y, tamano.pieza-(tamano.linea/2), tamano.pieza-(tamano.linea/2));
		ctx.fillStyle = piezas[i].color;
		ctx.fillRect(piezas[i].x, piezas[i].y, tamano.pieza-(tamano.linea/2), tamano.pieza-(tamano.linea/2));
		ctx.closePath();
		ctx.stroke();	

		ctx.fillStyle= piezas[i].colorNumero;
		ctx.font = "30px Arial";

		ctx.fillText( piezas[i].numero.toString(), piezas[i].numeroX, piezas[i].numeroY);

	}


}

