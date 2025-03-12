let listaAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombreAmigo = input.value.trim();
    
    if (nombreAmigo === "") {
        alert("Ingresa un nombre");
        return;
    }
    
    listaAmigos.push(nombreAmigo);//empuja el ultimo nombre a la fila
    actualizarLista();
    input.value = ""; // Limpia el campo
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    listaAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega un nombre, por favor!! :)");
        return;
    }
    
    let indicaGanador = Math.floor(Math.random() * listaAmigos.length);//Selecciona el nombre
    let amigoGanador = listaAmigos[indicaGanador];
    
    let resultado = document.getElementById("resultado");//muestra resultado
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoGanador}</strong></li>`;//menciona el nombre seleccionadoo
}
