
//Declaracion de variables globales

let btn = document.querySelector('#cotizar-boton');
let datosUser;
let datosVehiculo;
let tipoSeguroElegido;
let tipoSeguroJSON;
let cotizacion;
const URL = 'js/tipoSeguro.json';
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
     tipoSeguroElegido = document.querySelector('#tipoSeguro').value;
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
    btn.addEventListener('click', () =>{
        
        //INTERACCION CON EL DOM
        obtenerDatosDOM();

        //Crea el objeto Cotizador que contiene el metodo cotizar
        let cotizador = new Cotizador(datosVehiculo,tipoSeguroJSON,costoBase);
        cotizacion = cotizador.cotizar(tipoSeguroElegido);
        
        //Si faltan datos o se ingresa año erroneo muestra mensaje, si no muestra cotizacion del vehículo
        if (isNaN(cotizacion))
        swal({
            title: 'Error!',
            text: "Ingrese números válidos",
            icon: 'error',
            button: 'OK'
        })
     ; 
     else
        if (datosUser.NyA===""||datosUser.email==="")
        swal({
            title: 'Error!',
            text: "Ingrese sus datos",
            icon: 'error',
            button: 'OK'
        })
     ;  
     else
        if (cotizacion!=0)
        swal({
            title: 'Tu presupuesto se generó exitosamente!',
            text: "Hola " + datosUser.NyA + ", tu cotizacion para tu "+ datosVehiculo.marca +" "+datosVehiculo.modelo+" "+ datosVehiculo.año+ " es: $"+ cotizacion,
            icon: 'success',
            button: 'Ok, gracias!'
        })
    else
    swal({
        title: 'Error!',
        text: "Ingrese año válido",
        icon: 'error',
        button: 'OK'
    })

});