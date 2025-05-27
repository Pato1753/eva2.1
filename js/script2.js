//validar nombre, debe contener solo letras y no ser vacio

//aaaaaaaaaa
let personas = []

function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    //let eErrorNombre = 
    let eEdad = document.getElementById("edad")
    let vEdad = eEdad.value
    //let eErrorEdad = 
    let valNombre = valLetras(eNombre, vNombre, eErrorNombre)
    let valEdad = valEdad(eEdad, vEdad, eErrorEdad)
    if (valNombre == "bueno" && valEdad == "bueno"){
        let p = {
            Nombre : vNombre,
            Edad : vEdad,
        }
        personas.push(p)
        eNombre.style.backgroundColor = "green"
        eNombre.style.Color = "white"
        eEdad.style.backgroundColor = "green"
        eEdad.style.Color = "white"
        eNombre.innerText = ""
        eEdad.innerText = ""
    }else if(valNombre =="Malo"){
        alert("Ta malo")
        eNombre.style.backgroundColor = "red"
        eNombre.style.Color = "white"
        eEdad.style.backgroundColor = "red"
        eEdad.style.Color = "white"
    }

    }


function valLetras(elemento, valor, eError){
    const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    if (valor.length === 0) {
        eError.innerText = "El nombre no puede estar vacío.";
        return "malo";
    }

    for (let i = 0; i < valor.length; i++) {
        let caracter = valor[i];
        if (numeros.includes(caracter)) {
            eError.textContent = "El nombre no debe contener números.";
            return "malo";
        }
    }
    return "bueno";
}




function valEdad(elemento, valor, eError){
    if(valor < 18){
        alert = "error al registrar"
        eError.innerText = "La edad ingresada es menor a 18"
        elemento.style.backgroundColor = "yellow"
        elemento.style.backgroundColor = "grey"
        return "malo"
    }else if(valor>100){
        alert = "error al registrar"
        eError.innerText = "La edad ingresada es menor a 18"
        elemento.style.backgroundColor = "yellow"
        elemento.style.backgroundColor = "grey"
        return "malo"
    }else{
        eError.innerText = ""
        return "bueno"

    }


}

function cargarDatos(){
    let contador = 0
    for(let i = 0;personas[contador][contador],++){
        innerHTML = ""                    //VER EN CASA --------------------------------------------------------------------------
        
        contador++
    }
}

//validar edad: Debe ser mayor o igual a 18 y menor a 100