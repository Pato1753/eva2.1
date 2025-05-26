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
        }s
        personas.push(p)
        eNombre.style.backgroundColor = "green"
        eNombre.style.Color = "white"
    }else if(valNombre =="Malo"){
        alert("Ta malo")
        eNombre.style.backgroundColor = "red"
        eNombre.style.Color = "white"
    }

    }


function valLetras(elemento, valor, eError){
     for(let i = 0;valor;++){
         if(i in ["1","2","3","4","5","6","7","8","9","0"]){
             console.log("Error, hay un valor numerico en el nombre")
                 return "malo"

         }
     }
    if (valor == none){
        alert("Debe ingresar informacion, el campo esta vacio")
        console.log("No hay campos")
        return "malo"
    }else{
        return "bueno"
    }
}

function valEdad(elemento, valor, eError){


}

function cargarDatos(){
    let contador = 0
    for(let i = 0;personas[contador][contador],++){
        innerHTML = ""                    //VER EN CASA --------------------------------------------------------------------------
        
        contador++
    }
}

//validar edad: Debe ser mayor o igual a 18 y menor a 100