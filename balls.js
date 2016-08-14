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

	var equis			= 0;
	var ye				= 0;
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
	maximo: 19
}

var fondo={

	x:0,
	y:0
}

var posicionAntigua = {
	x : 0,
	y : 0
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

		piezas[i].equis	= x * tamano.pieza;
		piezas[i].ye	= y * tamano.pieza;

		
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

	var direccion;

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


	
	direccion =	muevePieza(seleccionado);

	if(direccion == izquierda){
			
		//console.log(piezas[seleccionado].numero + "debe de ir a la izquierda");	
		reproduccion = setInterval(function(){cambioCoordenadas(seleccionado, izquierda);}, 40);
		document.getElementById("canvas").removeEventListener("click", clickear);
	}
	else if(direccion == derecha){
		//console.log(piezas[seleccionado].numero + "debe de ir a la derecha");	
		reproduccion = setInterval(function(){cambioCoordenadas(seleccionado, derecha);}, 40);
		document.getElementById("canvas").removeEventListener("click", clickear);
	}
	else if(direccion == arriba){
		//console.log(piezas[seleccionado].numero + "debe de ir a la arriba");	
		reproduccion = setInterval(function(){cambioCoordenadas(seleccionado, arriba);}, 40);
		document.getElementById("canvas").removeEventListener("click", clickear);
	}
	else if(direccion == abajo){
		//console.log(piezas[seleccionado].numero + "debe de ir a la abajo");	
		reproduccion = setInterval(function(){cambioCoordenadas(seleccionado, abajo);}, 40);
		document.getElementById("canvas").removeEventListener("click", clickear);
	}
	else if(direccion == ninguna){
		//console.log(piezas[seleccionado].numero + "debe de ir a ninguna");	
		//setInterval(function(){cambioCoordenadas(seleccionado, arriba);}, 40);
	}
}


function muevePieza(seleccionado) {


	if(seleccionado == 0){

		if( piezas[seleccionado+1].numero == 30){
		//mueve seleccionado a la derech
			return derecha;

		}
		else if( piezas[seleccionado+5].numero == 30){
		//mueve abajo
			return abajo;
		}


	}

	else if(seleccionado >= 1 && seleccionado <= 3)
	{
	
		 if( piezas[seleccionado-1].numero == 30){
		//mueve a la izquierda
			return izquierda;
	
		}
		else if( piezas[seleccionado+1].numero == 30){
		//mueve seleccionado a la derech
			return derecha;

		}
		else if( piezas[seleccionado+5].numero == 30){
		//mueve abajo
			return abajo;
		}
	}

	else if(seleccionado == 4)
	{
	
		 if( piezas[seleccionado-1].numero == 30){
		//mueve a la izquierda
			return izquierda;
	
		}
		else if( piezas[seleccionado+5].numero == 30){
		//mueve abajo
			return abajo;
		}
	}

	else if(seleccionado >= 5 && seleccionado <= 19){

		if(seleccionado == 5 || seleccionado == 10 || seleccionado == 15){

			if( piezas[seleccionado+1].numero == 30){
			//mueve seleccionado a la derech
				return derecha;

			}
			else if( piezas[seleccionado-5].numero == 30){
			//mueve arriba
				return arriba;

			}
			else if( piezas[seleccionado+5].numero == 30){
			//mueve abajo
				return abajo;

			}
		}

		else if(seleccionado == 9 || seleccionado == 14 || seleccionado == 19){

			if( piezas[seleccionado-1].numero == 30){
			//mueve a la izquierda
				return izquierda;
		
			}
			else if( piezas[seleccionado-5].numero == 30){
			//mueve arriba
				return arriba;

			}
			else if( piezas[seleccionado+5].numero == 30){
			//mueve abajo
				return abajo;

			}
		}
		
		else {

			if( piezas[seleccionado-1].numero == 30){
			//mueve a la izquierda
				return izquierda;
		
			}
			else if( piezas[seleccionado+1].numero == 30){
			//mueve seleccionado a la derech
				return derecha;

			}
			else if( piezas[seleccionado-5].numero == 30){
			//mueve arriba
				return arriba;

			}
			else if( piezas[seleccionado+5].numero == 30){
			//mueve abajo
				return abajo;

			}
		}
	}
	
	else if(seleccionado == 20){
	
		if( piezas[seleccionado+1].numero == 30){
		//mueve seleccionado a la derech
			return derecha;

		}
		else if( piezas[seleccionado-5].numero == 30){
		//mueve arriba
			return arriba;

		}
	}

	
	else if(seleccionado >= 21 && seleccionado <= 23){
	
		 if( piezas[seleccionado-1].numero == 30){
		//mueve a la izquierda
			return izquierda;
	
		}
		else if( piezas[seleccionado+1].numero == 30){
		//mueve seleccionado a la derech
			return derecha;

		}
		else if( piezas[seleccionado-5].numero == 30){
		//mueve arriba
			return arriba;

		}
	}

	else if(seleccionado == 24){
	
		 if( piezas[seleccionado-1].numero == 30){
		//mueve a la izquierda
			return izquierda;
	
		}
		else if( piezas[seleccionado-5].numero == 30){
		//mueve arriba
			return arriba;

		}
	}

	else {
		return ninguna;
	}
}




function dibuja(seleccionado){


	ctx.beginPath();
	ctx.lineWidth = tamano.linea;
	ctx.strokeStyle = colores.lineaSeparacion;
	ctx.strokeRect(fondo.x, fondo.y, tamano.pieza-(tamano.linea/2), tamano.pieza-(tamano.linea/2));
	ctx.fillStyle = colores.hueco;
	ctx.fillRect(fondo.x, fondo.y, tamano.pieza-(tamano.linea/2), tamano.pieza-(tamano.linea/2));
	ctx.closePath();
	ctx.stroke();	
		
			
	ctx.beginPath();
	ctx.lineWidth = tamano.linea;
	ctx.strokeStyle = colores.lineaSeparacion;
	ctx.strokeRect(piezas[seleccionado].equis, piezas[seleccionado].ye, tamano.pieza-(tamano.linea/2), tamano.pieza-(tamano.linea/2));
	ctx.fillStyle = piezas[seleccionado].color;
	ctx.fillRect(piezas[seleccionado].equis, piezas[seleccionado].ye, tamano.pieza-(tamano.linea/2), tamano.pieza-(tamano.linea/2));
	ctx.closePath();
	ctx.stroke();	

	ctx.fillStyle= piezas[seleccionado].colorNumero;
	ctx.font = "30px Arial";
	ctx.fillText( piezas[seleccionado].numero.toString(), piezas[seleccionado].numeroX, piezas[seleccionado].numeroY);

}



function cambioCoordenadas(seleccionado, direccion){

	if(frames.total == 0){
		fondo.x = 	piezas[seleccionado].equis;
		fondo.y = 	piezas[seleccionado].ye;

		
	}

	if(direccion == izquierda){
		piezas[seleccionado].equis		= piezas[seleccionado].equis - 5;
		piezas[seleccionado].numeroX	= piezas[seleccionado].numeroX - 5;
	}

	else if(direccion == derecha){
		piezas[seleccionado].equis		= piezas[seleccionado].equis + 5;
		piezas[seleccionado].numeroX	= piezas[seleccionado].numeroX + 5;
	}
	else if(direccion == arriba){
		piezas[seleccionado].numeroY	= piezas[seleccionado].numeroY - 5;
		piezas[seleccionado].ye			= piezas[seleccionado].ye    - 5;
	}
	else if(direccion == abajo){
		piezas[seleccionado].numeroY	= piezas[seleccionado].numeroY + 5;
		piezas[seleccionado].ye			= piezas[seleccionado].ye    + 5;
	}

	dibuja(seleccionado);

	if(frames.total == frames.maximo){
		window.canvas.addEventListener("click", clickear);
		clearInterval(reproduccion);
		frames.total == 0

		piezas[
	}

	frames.total++;
}


function dibujaTodo(){
		

	for(var i=0; i<=24; i++){
		
		ctx.beginPath();
		ctx.lineWidth = tamano.linea;
		ctx.strokeStyle = colores.lineaSeparacion;
		ctx.strokeRect(piezas[i].equis, piezas[i].ye, tamano.pieza, tamano.pieza);
		ctx.fillStyle = piezas[i].color;
		ctx.fillRect(piezas[i].equis, piezas[i].ye, tamano.pieza, tamano.pieza);
		ctx.closePath();
		ctx.stroke();	

		ctx.fillStyle= piezas[i].colorNumero;
		ctx.font = "30px Arial";

		ctx.fillText( piezas[i].numero.toString(), piezas[i].numeroX, piezas[i].numeroY);

	}
}

