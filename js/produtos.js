//IMPORTANDO OS PRODUTOS DE /lista_produtos.js
import { produtos } from "./lista_produtos.js";

//IMPORTANDO A FUNÇÃO PARA ADICINAR ITENS AO CARRINHO DO ARQUIVO carrinho.js
import { addItem } from "./carrinho.js";

//PEGANDO OS ELEMENTOS DO DOM//
const sectionCards = document.querySelector('#cards')

// MONTANDO OS MENUS SEÇÕES
const menuSecoes = () => {
    //CRIANDO A COLEÇÃO MAP
    const mapSecoes = new Map()

    //PERCORRENDO O ARRAY PRODUTO
    produtos.forEach((elem) => {
        //SELECIONANDO AS SEÇOES
        mapSecoes.set(elem.id_secao, elem)
        
    })

    //CONVERTENDO MAP EM ARRAY
    const secoesFriltrada = Array.from(mapSecoes.values())

    //RETORNANDO O ARRAY  SELECIONADO
    return secoesFriltrada
}



//FUNÇÃO PARA INSERIR OS MENUS NA LISTA
const carregarSecoes = () =>{
    //PEGANDO ELEMENTOS ul menu-secoes DO DOM
    const ulMenuSecoes = document.querySelector('#secoes-produtos') 


    //CHAMANDO A FUNÇÃO menuSecoes E PERCORENDO O ARRAY DE SEÇOES JA SELECIONADAS
    menuSecoes().forEach((elem, i) => {
        //CRIANDO O ELEMENTEO li
        const liMenu = document.createElement('li')

        //CRIANDO O ELEMENTO a ATRIBUINDO O NOME DA SEÇÃO
        const aMenu = document.createElement('a')
        aMenu.setAttribute('href', '#')
        aMenu.setAttribute('class' , 'lnk-secoes')
        aMenu.innerHTML = elem.secao

        aMenu.addEventListener('click', ()=>{
            montarCards(filtroProduto(elem.id_secao))
         })

        //ADICIONANDO O ELEMENTO FILHO a NO li
        liMenu.appendChild(aMenu)

        //ADICINANDO O ELEMENTO FILHO ilMenu NO OBJETO DOM
        ulMenuSecoes.appendChild(liMenu)
    })
}

carregarSecoes()

//FUNÇÃO FILTRO PRODUTO
const filtroProduto = (idSecao)=>{
    //FILTRANDO OS PRODUTOS APARTIR DO REPETIÇÃO filter
    return produtos.filter(elem => elem.id_secao === idSecao)
}

//CAPITURANDO OS CARACTERES DO INPUT PESQUISA
//PEGANDO O INPUT DO DOM
const inputPesquisa = document.querySelector('#pesquisa')

inputPesquisa.addEventListener('input', (evt)=>{
    //PEGANDO O VALOR DO input E CONVERTENDO EM MINÚSCULO
    let txtInput = evt.target.value.toLowerCase()

    //FILTRANDO OS CARDS A PARTIR DO FILTER E INCLUDES
    montarCards(produtos.filter(elem => elem.descricao_produto.toLowerCase().includes(txtInput)))


})


//FUNÇÃO MONTAR CARDS
const montarCards = (objProdutos)=>{


    //LIMPANDO A SECTION cards
    sectionCards.innerHTML = ''

    //PERCORRENDO O ARRAY DE objProdutos
    objProdutos.forEach((elem, i) => {
    
        //CRIANDO O ELEMENTO div E DEFININDO O ATRIBUTO CARD
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')

        //CRIANDO O ELEMENTO img E DEFININDO OS ATRIBUTOS CARD
        const imgCard = document.createElement('img')
        imgCard.setAttribute('src', elem.caminho_imagem)
        imgCard.setAttribute('alt', elem.descricao_produto)

        //CRIANDO O ELEMENTO p E ATRIBUINDO A DESCRIÇÃO DOS PRODUTOS
        const pCard = document.createElement('p')
        pCard.innerHTML = elem.descricao_produto

        //CRIANDO O ELEMENTO h2 E ATRIBUINDO O LAVOR UNITÁRIO DEIXANDO EM DUAS CASAS DECIMAIS E SUBSTITUINDO PONTO POR VIRGULA
        const h2Card = document.createElement('h2')
        h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.',',')}`

        //CRIANDO O ELEMENTO button E DEFININDO OS ATRIBUTOS CLASS E A DESCRIÇÃO ADICIONAR
        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn-add')
        btnCard.innerHTML = 'adicionar'
        
        //REDIRECIONANDO PARA O CARRINHO
        btnCard.addEventListener('click', () => {
            addItem(elem)
            window.location.href = '/paginas/carrinho.html'
        });
        
        
        //ADICIONANDO OS ELEMENTOS FILHOS AOS divCard
        divCard.appendChild(imgCard)
        divCard.appendChild(pCard) 
        divCard.appendChild(h2Card)
        divCard.appendChild(btnCard)

        //ADICIOANDO O divCard A SECTION CARDS
        sectionCards.appendChild(divCard)

    });


}



//TRANSFORMA OS BOTOES DO HTML EM BOTOES FUNCINAIS COM O JS
const botoesAdicionar = document.querySelectorAll('.btn-add')

botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        console.log('Botão clicado')
        window.location.href = 'paginas/carrinho.html'
    })
})