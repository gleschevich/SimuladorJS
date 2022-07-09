//llama a función que hace el fetch y obtiene el seguro elegido cuando carga el body de la pagina
window.onload = ()=> {
    setTimeout(() => {
        fetcher(URL);  
     }, 2000);
 }

 //Fetch que recupera el JSON del archivo y lo guarda en variable tipoSeguroJSON
const fetcher = (URL)=> {
    
        fetch(URL)
        .then((response)=> response.json())
        .then((data)=> { 
              tipoSeguroJSON = data
            })

        .catch((err)=> {
            console.error('Se produjo un error en el fetch', err)
        })
        
  }