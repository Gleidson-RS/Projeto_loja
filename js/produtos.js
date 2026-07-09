//IMPORTANDO OS PRODUTOS DE /lista_produtos.js//
import { produtos } from "./lista_produtos.js";
//PEGANDO OS ELEMENTOS DO DOM//
const sectionCards = document.querySelector('#cards')

//CARREGANDO OS CARDS
const lista_produtos = () => {

    sectionCards.innerHTML = ''

        produtos.array.forEach((elem, i) => {
            
    const divCard = document.createElement('div')
    divCards.setAttribute('class', 'card')

    const imgCard = document.createElement('img')
    imgCard.setAttribute('src', elem.caminho_imagem)
    imgCard.setAttribute('alt', elem.descricao_produto)

    const pCard = document.createAttribute('p')
    pCard.innerHTML = elem.descricao_produto

    const h2Card = document.createAttribute('h2')
    h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.',',')}`

    const btnCard = document.createAttribute('button')
    btnCard.setAttribute('class', 'btn-add')
    btnCard.innerHTML = 'adicionar'

     divCard.appendChild(imgCard)
     divCard.appendChild(pCard)
     divCard.appendChild(h2Card)
     divCard.appendChild(btnCard)

     sectionCards.appendChild(divCard)

    });

}

lista_produtos()