//IMPORTANDO OS PRODUTOS DE /lista_produtos.js//
import { produtos } from "./lista_produtos.js";
//PEGANDO OS ELEMENTOS DO DOM//
const sectionCards = document.querySelector('#Cards')

//CARREGANDO OS Card
const lista_produtos = () => {

    sectionCard.innerHTML = ''

    produtos.forEach((elem, i) => {
            
    const divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')

    const imgCard = document.createElement('img')
    imgCard.setAttribute('src', elem.caminho_imagem)
    imgCard.setAttribute('alt', elem.descricao_produto)

    const pCard = document.createElement('p')
    pCard.innerHTML = elem.descricao_produto

    const h2Card = document.createElement('h2')
    h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.',',')}`

    const btnCard = document.createElement('button')
    btnCard.setAttribute('class', 'btn-add')
    btnCard.innerHTML = 'adicionar'

     divCard.appendChild(imgCard)
     divCard.appendChild(pCard) 
     divCard.appendChild(h2Card)
     divCard.appendChild(btnCard)

     sectionCard.appendChild(divCard)

    });

}


lista_produtos()

// MONTANDO OS MENUS SEÇÕES
const menuSecoes = () => {
    const mapSecoes = new Map()

    produtos.forEach((elem) => {
        mapSecoes.set(elem.id_secao, elem)
        
    })

    const secoesFriltrada = Array.from(mapSecoes.values())

    return secoesFriltrada
}



//FUNÇÃO PARA INSERIR OS MENUS NA LISTA
const carregarSecoes = () =>{
    //PEGANDO ELEMENTOS ul menu-secoes DO DOM
    const ulMenuSecoes = document.querySelector('#secoes-produtos')

    //LIMPANDO O ELEMENTO DO DOM
    ulMenuSecoes.innerHTML = ''

    //CHAMANDO A FUNÇÃO menuSecoes E PERCORENDO O ARRAY DE SEÇOES JA SELECIONADAS
    menuSecoes().forEach((ekem, i) => {
        //CRIANDO O ELEMENTEO li
        const liMenu = document.querySelector('li')

        //CRIANDO O ELEMENTO a ATRIBUINDO O NOME DA SEÇÃO
        const aMenu = document.querySelector('a')
        aMenu.setAttribute('href', '#')
        aMenu.setAttribute('class' , 'lnk-secoes')
        aMenu.innerHTML = elem.secao

        aMenu.addEventListener('click', ()=>{
            filtroProduto(elem.id_secao)
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