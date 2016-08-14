function direccionMovimiento(seleccionado) {


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
