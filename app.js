let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre ==="") {
        alert("Por Favor ingrese un nombre valido");
        return;
    }

    amigos.push(nombre);

    inputAmigo.value = "";

    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agregue al menos un nombre antes de sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

     let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

    let contenedorBoton = document.querySelector(".button-container");
    contenedorBoton.innerHTML = `
        <button class="button-draw" onclick="reiniciarJuego()">
            🔄 Volver a jugar
        </button>
    `;
}

function reiniciarJuego() {
    amigos = []; 
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = ""; 
    document.getElementById("amigo").value = ""; 

    
    let contenedorBoton = document.querySelector(".button-container");
    contenedorBoton.innerHTML = `
        <button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
            <img src="assets/play_circle_outline.png" alt="Ícono para sortear">
            Sortear amigo
        </button>
    `;
}