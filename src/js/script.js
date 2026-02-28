/* Anotações das funções segundo o que entendi */
/* querySelector = javascript identificando objetos do html */

// Seleciona os elementos no html usando seus IDs
const seta = document.getElementById('seta-menu');
const menu = document.getElementById('menu-dropdown');

// Função para abrir/fechar o menu
seta.addEventListener('click', function(event) {
    event.preventDefault(); // Impede a página de recarregar
    menu.classList.toggle('mostrar');
});

// Fechar o menu se clicar em qualquer outro lugar da tela
window.addEventListener('click', function(event) {
    if (!seta.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('mostrar');
    }
});


/*Efeito de fundo da home*/
const bannerFundo = document.querySelector('.show');   // A div que tem a imagem de fundo
const bannerLogo = document.querySelector('.titulo');  // A tag <img> que mostra o logo
const bannerDesc = document.querySelector('.descr');   // O parágrafo que tem o texto da história
const todosOsCards = document.querySelectorAll('.carrosel img'); // Uma lista com todas as fotos dos filmes embaixo

// Como temos vários cards, usamos o "forEach" ("para cada um").

todosOsCards.forEach(cardClicado => {

    // Ele fica esperando quando clicar em algum card.
    cardClicado.addEventListener('click', () => {
        
        // O comando "getAttribute" serve para ler o valor que está dentro deles.
        
        const imagemDoFundo = cardClicado.getAttribute('data-bg');
        const imagemDoLogo  = cardClicado.getAttribute('data-logo');
        const textoDaDescricao = cardClicado.getAttribute('data-desc');

        // Agora pegamos os elementos do banner e mudamos o conteúdo deles.

        // Troca a imagem de fundo (imagemDoFundo = data-bg)
        bannerFundo.style.backgroundImage = `url('${imagemDoFundo}')`;

        // Troca o caminho (src) da imagem do logo
        bannerLogo.src = imagemDoLogo;

        // Troca o texto (innerText) da descrição
        bannerDesc.innerText = textoDaDescricao;
        
        // Aqui coloquei para voltar para cima quando trocado
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
