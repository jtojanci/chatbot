let url="http://localhost:8000/movilidadappfinal"

let peticion={
    method:"GET"
}

fetch(url,peticion)

.then(function(Respuesta){

    return Respuesta.json()
})
.then(function(Respuesta){
    console.log(Respuesta)
})
.catch(function(Respuesta){
    console.log(Respuesta)
})
