//Cria um array chamado "produtos" onde armazena as seguintes informações: ID, nome, professor, preço, descrição e imagem.
const produtos = [
    {
        id: "1",
        nome: "Informática para Internet: Interfaces Web II",
        prof: "Prof. Kelly",
        preco_de: 80,
        preco_por: 50,
        descricao: "O melhor curso de JavaScript",
        imagem: "./assets/1.png",
    },
    {
        id: "2",
        nome: "Gestão de conteúdo Web II",
        prof: "Prof. Kelly",
        preco_de: 80,
        preco_por: 50,
        descricao: "O melhor curso de JavaScript",
        imagem: "./assets/3.png",
    },
    ];

    //Criando uma função chamada renderizaProdutos.
    function renderizaProdutos(){
        // Declara uma variavel para armazenar o HTML gerado.
        let html = "";

        // Itera sobre o array de produtos.
        for (let i = 0; i < produtos.length; i++) {

            // Chama a função `criaProduto` para gerar o HTML para um unico produto.
            html = html + criaProduto(produtos[i], i);
        }

        // Retorna o HTML gerado.
        return html;
    }

    // Está criando uma função chamada criaProduto(produto, index) criando uma representação HTML para um único produto.
    function criaProduto(produto, index) {

        // Retorna uma string que contém HTML.
        // Está criando uma div com uma classe chamada curso.
        // Cria uma imagem com a classe "inicio", um título "t" e a fonte da imagem (src) chamando a propriedade imagem do objeto produto.
        //Cria uma div com uma classe chamada curso-info chamando as propriedades nome, prof, descricao do objeto.

        // Está criando uma div com uma classe chamada curso-preco.
        // Está criando uma classe chamada preco-de que está chamando a propriedade preco_de do obejeto produto.
        // Está criando uma classe chamada preco-por que está chamando a propriedade preco_por do obejeto produto.
        // Está criando um botão com a classe "btncar" e a classe "btn-add". O atributo data-index é definido como o valor do índice index passado como argumento para a função. 
        return `
        <div class="curso">
            <img class='inicio' title="t" src="${produto.imagem}" />
            <div class="curso-info">
                <h4>${produto.nome}</h4>
                <p>${produto.prof}</p>
                <p>${produto.descricao}</p>
            </div>
            <div class="curso-preco">
                <span class="preco-de"R$${produto.preco_de}</span>
                <span class="preco-por"R$${produto.preco_por}</span>
                <button class="btncar btn-add" data-index="${index}"></button>
            </div>
        </div>
        `;
    }

    // Cria um objeto chamado container que chama o id container da pagina HTML.
    const container = document.querySelector('#container')

    // Atribui o resultado da função renderizaProdutos() ao innerHTML do elemento com o ID "container". 
    container.innerHTML = renderizaProdutos();

    // Cria um objeto chamado carrinhoItens.
    const carrinhoItens = {}

    // Cria uma função chamada renderizaCarrinho().
    function renderizaCarrinho(){

        // Declara uma variavel para armazenar o HTML gerado.
        let html = '';

        //Inicia um loop for in com a variavel produtoId que percorre as propriedades do produto carrinhoItens.
        for (let produtoId in carrinhoItens) {

            // Para cada chave no objeto carrinhoItens, esta chamando a função criaItemCarrinho() com o valor associado à chave.
            html = html + criaItemCarrinho(carrinhoItens[produtoId]);
        }

        // Seleciona o elemento HTML com a classe "carrinho_itens". Em seguida atualiza o innerHTML com o valor da variável html.
        document.querySelector('.carrinho_itens').innerHTML = html;
    }

    // Está criando uma função chamada criaItemCarrinho chamando a variavel produto.
    function criaItemCarrinho(produto) {

        // Retorna uma string que contém HTML.
        // Está criando uma div com uma classe chamada carrinho_compra.
        // Está inserindo o nome do produto com a tag h4.
        // Está inserindo o preço da unidade e a quantidade.
        // Está fazendo a multiplicação do valor pela quantidade.
        // Cria um botão que permite remover este item do carrinho.
        return `
        <div class="carrinho_compra">
            <h4>${produto.nome}</h4>
            <p>Preço unidade:${produto.preco_por}| Quantidade:${produto.quantidade}</p>
            <p>Valor: R$:${produto.preco_por*produto.quantidade}</p>
            <button data-produto-id="${produto.id}" class="btn-remove"></button>
        </div>
        `;
    }

    
    // Está criando uma função chamada criaCarrinhoTotal.
    function criaCarrinhoTotal() {

        // Está criando uma variavel local de valor 0.
        let total = 0;

        //Inicia um loop for in com a variavel produtoId que percorre as propriedades do produto carrinhoItens.
        for (let produtoId in carrinhoItens) {

            // Calcula o valor total de cada produto no carrinho, multiplicando o preço da unidade do produto (preco_por) pela quantidade desse produto no carrinho (quantidade).
            // O resultado desta conta é adicionado ao valor total na variável total.
            total = total + carrinhoItens[produtoId].preco_por *carrinhoItens[produtoId].quantidade;
        }

        // Esta parte do codigo seleciona o elemento HTML com a classe "carrinho_total" usando o document.querySelector(). 
        //Em seguida, atualiza o innerHTML com uma string de HTML.
        // Está inserindo o valor total dos produtos ao carrinho.
        // Está criando um link com um href vazio e abre em uma nova aba.
        // Está inserindo um icone de cartão de crédito.
        // Adiciona o texto "Comprar Agora" em negrito.
        document.querySelector('.carrinho_total').innerHTML = `
        <h4>Total: <strong> R$${total}</strong></h4>
        <a href="#" target="_blank">
        <ion-icon name="card-outline"></ion-icon>
        <strong>Comprar Agora</strong>
              </a>
        `;}

    // Está criando uma função chamada adicionaItemNoCarrinho chamando o obejeto produto.
    function adicionaItemNoCarrinho(produto) {

         // Está verificando se o produto ainda não existe no carrinho, está verificando se a propriedade produto.id não está presente no objeto carrinhoItens.
        // Se o produto ainda não estiver no carrinho, o código dentro do bloco do if é executado.
        if (!carrinhoItens[produto.id]) {

            // Adiciona o produto ao carrinho de compras
            carrinhoItens[produto.id] = produto;

            // Inicializa a propriedade quantidade para 0 no objeto do produto no carrinho. Isso mostra a quantidade do produto no carrinho.
            carrinhoItens[produto.id].quantidade = 0;

        // Aumenta de 1 em 1 a quantidade do produto no carrinho.    
        }++carrinhoItens[produto.id].quantidade;

        // Chama a função renderizaCarrinho() para atualizar os itens no carrinho na página.
        renderizaCarrinho();

        // Chama a função criaCarrinhoTotal() para atualizar o valor total na página.
        criaCarrinhoTotal();}

    // Registra um ouvinte de evento de clique, quando o documento é clicado, a função de é executada.
    document.body.addEventListener('click', function (event) {

        // Isso obtém o elemento que foi clicado e o armazena na variável elemento. O event.target é o elemento que ocorreu o clique.
        const elemento = event.target;

        //verifica se o elemento clicado possui a classe "btn-add", usando o método classList.contains(). Se o elemento tiver essa classe, significa que o botão "Adicionar ao Carrinho" foi clicado.
        if (elemento.classList.contains('btn-add')) {

            // Se o botão "Adicionar ao Carrinho" foi clicado, esta linha obtém o valor do atributo data-index desse botão, transformando em um numero inteiro pelo parseInt.
            const index = parseInt(elemento.getAttribute('data-index'), 10);

            // Acessa o objeto do produto no array produtos e o armazena na variável produto.
            const produto = produtos[index];

            // A função adicionaItemNoCarrinho() chama os valores do objeto produto, e adiciona esse produto ao carrinho de compras.
            adicionaItemNoCarrinho(produto);
        }

        // Verifica se o elemento clicado possui a classe CSS "btn-remove". Se tiver essa classe o loop sera executado.
        if (elemento.classList.contains('btn-remove')){

            // Obtém o valor do atributo data-produto-id do botão para saber qual produto deve ser removido do carrinho.
            const produtoId = elemento.getAttribute('data-produto-id');
            
            // Verifica se a quantidade desse produto no carrinho é menor ou igual a 1. Se for, o produto é removido do carrinho usando delete carrinhoItens[produtoId]. Caso contrário, a quantidade é decrementada em 1.
            if (carrinhoItens[produtoId].quantidade <= 1) {
                delete carrinhoItens[produtoId];
            }   else {
                --carrinhoItens[produtoId].quantidade;
            }

            // Chama a propriedade renderizaCarrinho() para atualizar a exibição dos itens do carrinho.
            renderizaCarrinho();

            // Chama a propriedade criaCarrinhoTotal() para recalcular e atualizar o valor total do carrinho.
            criaCarrinhoTotal();
        }
    });
    