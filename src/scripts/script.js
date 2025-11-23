import { buscarDadosDaApi } from './api.js';

let apiKeyInput = document.querySelector("#api-key-input");
let categoriaSelect = document.querySelector("#categoria-select");
let inputBusca = document.querySelector("#campo-busca");
let btnBusca = document.querySelector("#botao-busca");

let statusContainer = document.querySelector("#status-container");
let cardContainer = document.querySelector(".card-container");

let btnAnterior = document.querySelector("#btn-anterior");
let btnProximo = document.querySelector("#btn-proximo");
let infoPagina = document.querySelector("#info-pagina");

let dadosApi = []; // Armazena os dados originais da API
let paginaAtual = 1;

async function carregarDados() {
    cardContainer.innerHTML = ""; // Limpa os cards antigos
    statusContainer.innerHTML = `<p class="status-message">Carregando...</p>`; // Feedback visual
    const userApiKey = apiKeyInput.value;

    if (!userApiKey) {
        statusContainer.innerHTML = `<p class="status-message">Por favor, insira sua chave da API para começar.</p>`;
        return;
    }

    try {
        const categoria = categoriaSelect.value;
        dadosApi = await buscarDadosDaApi(categoria, paginaAtual, userApiKey);
        renderCards(dadosApi); // Renderiza todos os cards ao carregar
        statusContainer.innerHTML = ""; // Limpa a mensagem de status
        infoPagina.textContent = `Página ${paginaAtual}`;
    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        statusContainer.innerHTML = `<p class="status-message">Não foi possível carregar os dados. Verifique sua API Key.</p>`;
    }
}

function handleSearch() {
    let termoBuscado = inputBusca.value.toLowerCase();
    const dadosValidos = dadosApi || []; 
    let dadosFiltrados = dadosValidos.filter(dado => dado.product_title.toLowerCase().includes(termoBuscado));
    renderCards(dadosFiltrados);
}

function renderCards(dados) {
    cardContainer.innerHTML = "";

    const dadosValidos = dados || []; 

    if (dadosValidos.length === 0) {
        cardContainer.innerHTML = `<p class="status-message">Nenhum resultado encontrado.</p>`;
        return;
    }

    for (let dado of dadosValidos) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <img src="${dado.product_photo}" alt="Capa do livro ${dado.product_title}">
            <div class="card-content">
                <div class="card-info">
                    <h2>${dado.product_title}</h2>
                    <p>Preço: ${dado.product_price || 'Não informado'}</p>
                    <p>Posição: #${dado.rank}</p>
                </div>
                <a href=${dado.product_url} target="_blank">Ver na Amazon</a>
            </div>
        `;
        cardContainer.appendChild(article);
    }
}

async function carregarDadosFicticios() {
    try {
        // Adiciona a mensagem de aviso antes de renderizar os cards
        statusContainer.innerHTML = `<p class="status-message warning"><b>Atenção:</b> Estes são dados fictícios. Para ver os dados em tempo real, insira sua chave da RapidAPI no campo acima.</p>`;

        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Não foi possível carregar os dados fictícios.');
        }
        const dadosFicticios = await response.json();
        renderCards(dadosFicticios); 
    } catch (error) {
        console.error("Erro ao carregar dados fictícios:", error);
        cardContainer.innerHTML = `<p class="status-message">Não foi possível carregar os dados fictícios...</p>`;
    }
}

// --- Event Listeners ---
btnBusca.addEventListener("click", handleSearch);
apiKeyInput.addEventListener("change", () => {
    paginaAtual = 1;
    carregarDados();
});
categoriaSelect.addEventListener("change", () => {
    paginaAtual = 1; // Reseta para a primeira página ao mudar de categoria
    carregarDados();
});
btnProximo.addEventListener("click", () => {
    if (apiKeyInput.value !== "") {
        paginaAtual++;
        carregarDados();
    }
});
btnAnterior.addEventListener("click", () => {
    if (paginaAtual > 1 && apiKeyInput.value !== "") {
        paginaAtual--;
        carregarDados();
    }
});

function iniciarAplicacao() {
    statusContainer.innerHTML = `<p class="status-message">Bem-vindo! Insira sua chave da RapidAPI no campo acima para buscar os mais vendidos.</p>`;
    cardContainer.innerHTML = "";

    // Após 5 segundos, se a chave da API ainda não foi inserida, carrega os dados fictícios.
    setTimeout(() => {
        if (!apiKeyInput.value) {
            statusContainer.innerHTML = `<p class="status-message">Carregando dados fictícios do data.json...</p>`;
            
            // Aguarda mais um pouco para que a mensagem de "carregando" seja visível
            setTimeout(carregarDadosFicticios, 2000);
        }
    }, 5000);
}

iniciarAplicacao();
