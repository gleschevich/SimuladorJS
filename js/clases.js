class Cotizador {
	constructor(datosVehiculo, tipoDeSeguro, costoBase) {
		this.datosVehiculo = datosVehiculo;
		this.tipoDeSeguro = tipoDeSeguro;
        this.costoBase = costoBase;
	}
	cotizar(tipoSeguro){
		unStore();
		console.log(datosUser);
		console.log(datosVehiculo);
		
		//Suma a cotización del vehículo segun marca 
		switch (datosVehiculo.marca){
			case "Toyota": 
				cotizacion+= cotizacion * 0.05;
				break;
			case "Ford":
			case "Chevrolet": 
				cotizacion+= cotizacion * 0.03;
				break;
			case "Fiat":
			case "Renault": 
			case "Peugeot": 
				cotizacion+= cotizacion * 0.02;
				break;
			case "Honda": 
			case "Hyundai": 
				cotizacion+= cotizacion * 0.08;
				break;
			default:
				document.querySelector('#cotizar').innerHTML= "Ingrese marca válida"; 
				break;
		}
		
		switch (datosVehiculo.modelo){
			case ("Base"): 
				cotizacion+= cotizacion * 0.02;
				break;
			case ("Medio/XLT"): 
				cotizacion+= cotizacion * 0.05;
				break;
			case ("Full"): 
				cotizacion+= cotizacion * 0.08;
				break;
			default:
				document.querySelector('#cotizar').innerHTML= "Ingrese modelo válido"; 
				break;
		} 
		
		//Suma a la cotización el valor del tipo de seguro elegido, obtenido del JSON
		for (let x of tipoSeguroJSON) {
			console.log(x.tipo + ' ' + x.valor);
			if (x.tipo === tipoSeguroElegido) {
				cotizacion+= cotizacion * x.valor;
				break;
			}
		}

		
		//Suma a cotización el valor según el año del vehículo
		if (datosVehiculo.año>=1960 && datosVehiculo.año <1999)
			cotizacion+= cotizacion * 0.01;
			else
				if (datosVehiculo.año>=1999 && datosVehiculo.año<=2009)
					cotizacion+= cotizacion * 0.03;
					else 
						if (datosVehiculo.año>=2010 && datosVehiculo.año<=2019)
							cotizacion+= cotizacion * 0.06;
						else 
							if (datosVehiculo.año>=2020 && datosVehiculo.año<=2021)
								cotizacion+= cotizacion * 0.08;
							else
								if (datosVehiculo.año>=2020 && datosVehiculo.año<=2021)
									 cotizacion+= cotizacion * 0.09;
								else
									if(datosVehiculo.año===2022)
										cotizacion+= cotizacion * 0.10;
										else 
											return cotizacion =0;
		cotizacion=cotizacion.toFixed(2);
		return cotizacion;  
	}
	
	
}


