let personas = []

function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre") 

    let eEdad = document.getElementById("edad")
    let vEdad = eEdad.value
    let eErrorEdad = document.getElementById("errorEdad") 

    let valNombre = valLetras(eNombre, vNombre, eErrorNombre)
    let valEdad = valEdad(eEdad, vEdad, eErrorEdad)

    if (valNombre == "bueno" && valEdad == "bueno"){
        let p = {
            nombre : vNombre,
            edad : vEdad,
        }
        personas.push(p)
        eNombre.style.backgroundColor = "green"
        eNombre.style.color = "white"
        eEdad.style.backgroundColor = "green"
        eEdad.style.color = "white"
        eNombre.innerText = ""
        eEdad.innerText = ""
        console.log(personas)
    }if(valNombre == "bueno"){
        let p = {
                nombre : vNombre,
                edad : "nulo",
            }
            personas.push(p)
            eNombre.style.backgroundColor = "green"
            eNombre.style.color = "white"
            eEdad.style.backgroundColor = "green"
            eEdad.style.color = "white"
            eNombre.innerText = ""
            eEdad.innerText = ""
    }
    
    
    else if(valNombre =="malo"){
        alert("Ta malo")
        eNombre.style.backgroundColor = "red"
        eNombre.style.color = "white"
        eEdad.style.backgroundColor = "red"
        eEdad.style.color = "white"
    }
    }

function valLetras(elemento, valor, eError){
    let numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    if (valor.length == 0) {
        eError.innerText = "El nombre no puede estar vacío.";
        return "malo";
    }

    for (let i = 0; i < valor.length; i++) {
        let caracter = valor[i];
        if (numeros.includes(caracter)) {
            eError.innerText = "El nombre no debe contener números.";
            return "malo";
        }
    }
    return "bueno";
}

function valEdad(elemento, valor, eError){
    if(valor < 18){
        alert("error al registrar")
        eError.innerText = "La edad ingresada es menor a 18"
        elemento.style.backgroundColor = "yellow"
        elemento.style.backgroundColor = "grey"
        return "malo"
    }else if(valor>100){
        alert("error al registrar")
        eError.innerText = "La edad ingresada es mayor a 100"
        elemento.style.backgroundColor = "yellow"
        elemento.style.backgroundColor = "grey"
        return "malo"
    }else{
        eError.innerText = ""
        return "bueno"
    }
}
function cargarDatos(){
    console.log("ESTA CARGANDO")
    let mapPersonas = personas.map((p,index)=>{
        return "<tr><td>"+p.nombre+
                "</td><td>"+p.edad+
                "</td><td><button type='button' value='"+index+"' onclick='eliminar("+index+")'>Eliminar</button>"+
                "<button onclick='actualizarFormulario("+index+")'>Actualizar</button></td></tr>"
    })
    let tablaPersonas = document.getElementById("cuerpoTabla")
    let strTablaPersonas = mapPersonas.join("")
    tablaPersonas.innerHTML = strTablaPersonas 
    console.log(mapPersonas)
    }





function eliminar(indice){
    personas = personas.filter((p,index)=>{
        if(index != indice){ 
            return p
        }
    })
    cargarDatos();
    console.log(personas)
}
function actualizarFormulario(indice){
    let eNombre = document.getElementById("nombre1")
    let eEdad= document.getElementById("edad1")
    let persona = personas.filter((p,index)=>{
        if(index == indice){
            return p
        }
    })
    console.log(persona)
    eNombre.value = persona[0].nombre
    eEdad.value = persona[0].edad
    let btnActualizar = document.getElementById("btnActualizar")
    btnActualizar.value = indice
}
function actualizar(){
    let eNombre = document.getElementById("nombre1")
    let vNombre = eNombre.value
    let eApellido = document.getElementById("edad1")
    let vApellido = eApellido.value
    let btnActualizar = document.getElementById("btnActualizar")
    let indice = btnActualizar.value

    personas = personas.map((p,index)=>{
        if(index == indice){
            return {
                nombre:vNombre,
                edad:vEdad
            }
        }else{
            return p
        }
    })
    cargarDatos()
}

    

//validar edad: Debe ser mayor o igual a 18 y menor a 100