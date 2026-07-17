import { listItens, removeItem, novaQuant } from "./carrinho.js"

//MONTAR TELA CARRINHO
const montaTelaCarrinho = () => {

    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    sectionItensCarrinho.innerHTML = ''

    const itens = listItens() || []

    itens.forEach((elem, i) => {

        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', 'item')

        const divImgItem = document.createElement('div')
        divImgItem.setAttribute('class', 'img-item')

        const imgItem = document.createElement('img')
        imgItem.setAttribute('src', elem.caminho_imagem)
        imgItem.setAttribute('alt', elem.descricao_produto)

        divImgItem.appendChild(imgItem)

        const divDescricaoItens = document.createElement('div')
        divDescricaoItens.setAttribute('class', 'descricoes-itens')

        const divDescricao = document.createElement('div')
        divDescricao.setAttribute('class', 'descricao')

        divDescricao.innerHTML = elem.descricao_produto

        const divValores = document.createElement('div')
        divValores.setAttribute('class', 'valores')

        const pItem = document.createElement('p')

        pItem.innerHTML =
            `R$ ${elem.valor_unitario.toFixed(2).replace('.', ',')}`

        const divQuant = document.createElement('div')
        divQuant.setAttribute('class', 'input-quantidade')

        const inputQuantidade = document.createElement('input')

        inputQuantidade.setAttribute('type', 'number')
        inputQuantidade.setAttribute('class', 'input-item')
        inputQuantidade.setAttribute('min', '1')

        inputQuantidade.value = elem.quantidade

        // Atualiza quantidade sem recarregar a página
        // ALTERAÇÃO PELO GPT
        inputQuantidade.addEventListener('input', () => {

            let quantidade = Number(inputQuantidade.value)

            // valida se é inteiro positivo
            // ALTERAÇÃO PELO GPT
            if (!Number.isInteger(quantidade) || quantidade <= 0) {

                quantidade = 1
                inputQuantidade.value = 1
            }
            //FIM DA ALTERAÇÃO (ajuda por motivos de baixa intimidade com a linguaguem de programação)
            novaQuant(i, quantidade)            // salva nova quantidade no array

            atualizaResumo()            // atualiza somente os valores da tela

            atualizaValorItem(pCalc, elem.valor_unitario, quantidade)

})

        divQuant.appendChild(inputQuantidade)



        // ALTERAÇÃO
        // valor total do produto
        const pCalc = document.createElement('p')

        pCalc.innerHTML =
            `R$ ${(elem.valor_unitario * elem.quantidade)
                .toFixed(2)
                .replace('.', ',')}`




        const imgRemover = document.createElement('img')

        imgRemover.setAttribute(
            'src',
            '../imagens/icones/remover.png'
        )


        imgRemover.addEventListener('click', () => {


            if (confirm(`tem certeza que deseja remover ${elem.descricao_produto}`)) {


                removeItemTela(i)

            }

        })

        divValores.appendChild(pItem)
        divValores.appendChild(divQuant)
        divValores.appendChild(pCalc)
        divValores.appendChild(imgRemover)
        divDescricaoItens.appendChild(divDescricao)
        divDescricaoItens.appendChild(divValores)

        sectionItem.appendChild(divImgItem)
        sectionItem.appendChild(divDescricaoItens)

        sectionItensCarrinho.appendChild(sectionItem)

    })

}

// ALTERAÇÃO
// Atualiza o valor do item individual
const atualizaValorItem = (elemento, preco, quantidade) => {


    elemento.innerHTML =
        `R$ ${(preco * quantidade)
            .toFixed(2)
            .replace('.', ',')}`

}

montaTelaCarrinho()

const removeItemTela = (i) => {

    removeItem(i)

    montaTelaCarrinho()

    atualizaResumo()

}

// ATUALIZA O RESUMO DA COMPRA

const atualizaResumo = () => {


    const itens = listItens() || []



    const total = itens.reduce((soma, item) => {


        return soma +
            (item.valor_unitario * item.quantidade)


    }, 0)



    document.querySelector('#valor-produtos').innerHTML = `R$ ${total.toFixed(2).replace('.', ',')}`
    
    
    document.querySelector('#valor-total').innerHTML = `R$ ${total.toFixed(2).replace('.', ',')}`

}



atualizaResumo()