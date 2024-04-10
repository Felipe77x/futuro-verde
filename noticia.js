// Criação dos elementos HTML dinamicamente com JavaScript

// Cria um elemento <h1> para o título
const pageTitle = document.createElement("h1");
pageTitle.textContent = "Conflito na faixa de Gaza";

// Cria um formulário para adicionar notícias
const newsForm = document.createElement("form");
newsForm.id = "newsForm";
newsForm.innerHTML = `
    <label for="title">Entenda sobre o conflito na faixa de Gaza entre Israel e Palestina</label><br>
    lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll:</label><br>
    
`;

// Cria uma lista <ul> para exibir as notícias
const newsList = document.createElement("ul");
newsList.id = "newsList";

// Adiciona todos os elementos criados ao <body> do documento
document.body.appendChild(pageTitle);
document.body.appendChild(newsForm);
document.body.appendChild(newsList);

// Função para adicionar notícia
function addNews(title, content) {
    const li = document.createElement("li");
    li.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    newsList.appendChild(li);
}

// Função para lidar com o envio do formulário
document.getElementById("newsForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    addNews(title, content);
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
});
