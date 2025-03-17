// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigoAñadido = "";
const grupoAmigos = [];
let amigoSorteado = "";
const grupoAmigosSorteados = [];


function agregarAmigo()
{
    let amigoAñadido = document.getElementById("amigo").value;
    if(amigoAñadido != "")
    {
        grupoAmigos[grupoAmigos.length] = amigoAñadido;
        document.getElementById("listaAmigos").innerHTML = grupoAmigos;
        console.log(grupoAmigos);
        console.log(amigoAñadido);
        limpiarInput(); 
    } else {
        alert("Ingrese un nombre válido por favor");
    }
    return;            
}

function limpiarInput()
{
    let amigoAñadido = document.querySelector("#amigo");
    amigoAñadido.value = "";
    return;
}

function sortearAmigo()
{
    if(grupoAmigos.length != 0)
    {    
        if(grupoAmigosSorteados.length == grupoAmigos.length)
        {
            alert("Se han sorteado todos");
        } else {
                let personaGrupo = Math.floor(Math.random()*grupoAmigos.length);
                let amigoSorteado = grupoAmigos[personaGrupo];
                
            if(grupoAmigosSorteados.includes(amigoSorteado))
            {
                return sortearAmigo();
            } else {
                grupoAmigosSorteados.push(amigoSorteado);
                console.log(personaGrupo);
                console.log(amigoSorteado);
                document.getElementById("resultado").innerHTML = `Su amigo secreto es: ${amigoSorteado}`;
                return amigoSorteado;
            } 
        }  
    }  
}



