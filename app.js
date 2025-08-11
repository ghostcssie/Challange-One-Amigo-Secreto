//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver 

// Lista de amigos (começa com o que tiver salvo no localStorage)
let amigos = JSON.parse(localStorage.getItem("amigos")) || [];

// Atualiza a lista assim que a página carrega
atualizarLista();

function adicionarAmigo() {
    const input = document.querySelector("#amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar.");
        return;
    }

    amigos.push(nome);
    salvarNoLocalStorage();
    atualizarLista();

    input.value = ""; // limpa o campo
    input.focus(); // coloca o cursor de volta no campo
}

function atualizarLista() {
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        const aviso = document.createElement("li");
        aviso.textContent = "Nenhum nome para sortear!";
        resultado.appendChild(aviso);
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    const itemResultado = document.createElement("li");
    itemResultado.textContent = `Sorteado: ${nomeSorteado}`;
    resultado.appendChild(itemResultado);

    amigos.splice(indiceSorteado, 1); // remove o nome sorteado
    salvarNoLocalStorage();
    atualizarLista();
}

function salvarNoLocalStorage() {
    localStorage.setItem("amigos", JSON.stringify(amigos));
}
