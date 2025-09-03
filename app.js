// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaración de la variable tipo array, que almacenará los nombres de los amigos ingresados
let amigos = []

// Función para agregar amigos
function agregarAmigo() {
    const inputNombre = document.getElementById('amigo')
    const nombre = inputNombre.value;

    if (nombre === ""){
        alert("Por favor, inserte un nombre.") 
    }else{
        amigos.push(nombre); 
        inputNombre.value = ""; 
        mostrarAmigos(); 
    }
    
}
// Funcion para mostrar a los amigos en el HTML
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
  
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const nombreAmigo = amigos[i];
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = nombreAmigo;
    
    lista.appendChild(nuevoLi);
  }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return; 
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const elementoResultado = document.getElementById("resultadoSorteo");
    elementoResultado.innerHTML = `¡El amigo sorteado es: ${amigoSorteado}!`;
}
