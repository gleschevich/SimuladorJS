//Declaracion de variables globales

let datosUser;
let datosVehiculo;
let tipoSeguro;
let cotizacion;
const costoBase=3000;


//Funcion que Obtiene los datos del DOM y los guarda en los JSON.
function obtenerDatosDOM(){
     
     datosUser={
         NyA: document.querySelector('#nombreUser').value,
         email: document.querySelector('#emailUser').value
     }
     datosVehiculo={
        marca: document.querySelector('#marca').value,
        modelo:  document.querySelector('#modelo').value,
        año: parseInt(document.querySelector('#año').value)
     }
     store(datosUser,datosVehiculo);
     tipoSeguro = document.querySelector('#tipoSeguro').value;
     cotizacion=costoBase;

}
//Funcion que guarda en Storage los datos del vehículo y del usuario
function store(datosUser, datosVehiculo){
     let datosU = JSON.stringify(datosUser);
     let datosV = JSON.stringify(datosVehiculo);
     localStorage.setItem("datosUser", datosU);
     localStorage.setItem("datosVehiculo", datosV);
}
//Recupera datos guardados en STORAGE
function unStore(){ 
    if ((localStorage.getItem("datosUser")) && (localStorage.getItem("datosVehiculo")))
    {    datosUser=JSON.parse(localStorage.getItem("datosUser"));
        datosVehiculo=JSON.parse(localStorage.getItem("datosVehiculo"));
    }
}

   
//Evento y listener que espera el click en botón para realizar la cotizacion
document.querySelector('#cotizar-boton').addEventListener('click', () =>{
        
        //INTERACCION CON EL DOM
        obtenerDatosDOM();
        let cotizador = new Cotizador(datosVehiculo,tipoDeSeguroJSON,costoBase);
        cotizacion = cotizador.cotizar(tipoSeguro);
        if (isNaN(cotizacion))
            document.querySelector('#cotizar').innerHTML= "Ingrese números válidos"; 
        if (datosUser.NyA===""||datosUser.email==="")
            document.querySelector('#cotizar').innerHTML= "Ingrese sus datos"; 
        else 
            document.querySelector('#cotizar').innerHTML= "Hola " + datosUser.NyA + ", tu cotizacion para tu "+ datosVehiculo.marca +" "+datosVehiculo.modelo+" "+ datosVehiculo.año+ " es: "+ cotizacion;

});