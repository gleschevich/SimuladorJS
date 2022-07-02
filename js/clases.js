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
		
		//Recorre arreglos de objetos y asigna precio segun tipo de seguro
		for (let x of tipoDeSeguroJSON) {
			console.log(x.tipo + ' ' + x.valor);
			if (x.tipo === tipoSeguro) {
				cotizacion+= cotizacion * x.valor;
				break;
			}
		}
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


