let url="http://localhost:8000/firulais"

let peticion={
    method:"GET"
}

fetch(url,peticion)

.then(function(Respuesta){

    return Respuesta.json()
})
.then(function(Respuesta){
    console.log(Respuesta)
    
    let botonSend=document.getElementById("botonSend")
    let botonChat=document.getElementById("textoChat")
    let mensajeChat=document.getElementById("mensajeChat")

    //mapear el arreglo de preguntas y mapear el arreglo de respuestas

let preguntas=Respuesta.map(function(pregunta){
    return pregunta.pregunta

})

let respuestas=Respuesta.map(function(Respuesta){
    return Respuesta.Respuesta

})

console.log(preguntas)
console.log(respuestas)

//se borra esta parte que sigue porque ya las traigo del servidor

/*
let preguntas=[
    "¿Cuál es tu nombre?",
    "¿Cuántos años tienes",
    "¿Cuál es tu película favorita",
    "¿Tienes mascotas?",
    "¿Cuál es tu hobby?"
]

let respuestas=[
    "Hola humano, mi nombre es Firulais",
    "Tengo 4 años",
    "Todos los perros van al cielo",
    "Si, un hamster",
    "Perseguir ciclistas"
]

*/

//funcion para iniciar y
let indicePregunta=0

function procesarEntradaChat(){
    let escribeUsuario=textoChat.value.toLowerCase()
    textoChat.value=""
    if(escribeUsuario=="hola"){
        let listaPreguntas=preguntas.map((pregunta,index)=>`${index+1}. ${pregunta}`).join("<br>")
        mensajeChat.innerHTML+=`<p class="text-start">Hola bienvenido <br> ${listaPreguntas}</p>`
    }
    else{
        let numeroPregunta=parseInt(escribeUsuario)-1
        if(numeroPregunta>=0 && numeroPregunta<preguntas.length){
            mensajeChat.innerHTML+=`<p class="text-start">${preguntas[numeroPregunta]}</p>`
            mensajeChat.innerHTML+=`<p class="text-end">${respuestas[numeroPregunta]}</p>`
        }
    }
}

//rutina para activar el chatbot

botonSend.addEventListener("click",procesarEntradaChat)

textoChat.addEventListener("keypress",function(evento){
    if(evento.key=="Enter"){
        evento.preventDefault()
        procesarEntradaChat()
    }

})

})
.catch(function(Respuesta){
    console.log(Respuesta)
})
