//Declaracion de variables globales
let nuevoUsado;
let modelo;
let marca;
let año;
let tipoSeguro;
let cotizacion;
const costoBase=3000;

/*do{
    rta= prompt("Ingresa contraseña para utilizar el cotizador PISTA: empieza con coder y termina con house ;)");
    console.log(rta);
}while(rta !=="coderhouse");*/

function obtenerDatosDOM(){
     marca = document.querySelector('#marca').value;
     modelo = document.querySelector('#modelo').value;
     año = parseInt(document.querySelector('#año').value);
     tipoSeguro = document.querySelector('#tipoSeguro').value;
     cotizacion=costoBase;

}

function procesarDatosDOM(marca,modelo,año,tipoSeguro){
    //Depende los datos ingresados es el porcentaje que se agrega sobre el costo base
    switch (marca){
        case ("Toyota"): 
            cotizacion+= cotizacion * 0.05;
            break;
        case ("Ford" || "Chevrolet"): 
            cotizacion+= cotizacion * 0.03;
            break;
        case ("Fiat" || "Renault" || "Peugeot"): 
            cotizacion+= cotizacion * 0.02;
            break;
        case ("Honda" || "Toyota"): 
            cotizacion+= cotizacion * 0.08;
            break;
        default:
            console.log("Error en marca");
            break;
    }
    
    switch (modelo){
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
            console.log("Error en modelo");
            break;
    }
    switch (tipoSeguro){
        case ("Terceros"): 
            cotizacion+= cotizacion * 0.02;
            break;
        case ("Terceros completo"): 
            cotizacion+= cotizacion * 0.05;
            break;
        case ("Todo Riesgo"): 
            cotizacion+= cotizacion * 0.08;
            break;
        default:
            console.log("Error en tipo de seguro");
            break;
    }
    if (año>=1960 && año <1999)
        cotizacion+= cotizacion * 0.01;
        else
            if (año>=1999 && año<=2009)
                cotizacion+= cotizacion * 0.03;
                else 
                    if (año>=2010 && año<=2019)
                        cotizacion+= cotizacion * 0.06;
                    else 
                        if (año>=2020 && año<=2021)
                            cotizacion+= cotizacion * 0.08;
                        else
                            if (año>=2020 && año<=2021)
                                 cotizacion+= cotizacion * 0.09;
                            else
                                if(año===2022)
                                    cotizacion+= cotizacion * 0.10;
                                    else 
                                        prompt("Ingrese Año válido");
    cotizacion=cotizacion.toFixed(2);
    return cotizacion;  

                                        
                                        




}
//Evento que espera el click en botón para realizar la cotizacion
document.querySelector('#cotizar-boton').addEventListener('click', () =>{
    
        obtenerDatosDOM();
        cotización = procesarDatosDOM(marca,modelo,año,tipoSeguro);
        if (isNaN(cotizacion))
            document.querySelector('#cotizar').innerHTML= "Ingrese números válidos"; 
        else 
            document.querySelector('#cotizar').innerHTML= "Cotización: $" + cotizacion;

});