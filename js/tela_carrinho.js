//MONTAR TELA CARRINHO  
const montaTelaCarrinho = (objListaItens)=>{
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')
    
    objListaItens.forEach((elem, i) => {
    const sectionItem = document.createElement('section')
    sectionItem.setAttribute('class', 'item')

    const divImgItem = document.createElement('div')
    divImgItem = setAttribute('class', 'img-item')

    const imgIten = document.createElement('img')
    imgIten.setAttribute('src', elem.caminho_imagem)
    imgIten.setAttribute('src', elem.descricao_produto)

    const divDescricaoItens = document.createElement('div')
    divDescricaoItens = setAttribute('class', 'descricoes-itens')

    const divDescricao = document.createElement('div')
    divDescricao = setAttribute('class', 'valores')

    const divValores = document.createElement('div')
    divValores.setAttribute('class', 'valores')

    const pItem = document.createElement('p')
    pItem.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).repeat('.',',')}`

    const divQuant = document.createElement('div')
    divQuant.setAttribute('class', input-quantidade)

    const inputQuantidade = document.createElement('input')
    inputQuantidade.setAttribute('type', 'number')
    inputQuantidade.setAttribute('name', `quant${i}`)
    inputQuantidade.setAttribute('id', `quant${i}`)
    inputQuantidade.setAttribute('class', 'input-item')
    inputQuantidade.setAttribute('value', '1')
    
        divQuant.appendChild(inputQuantidade)

        const pCalc = document.createElement('p')
        pCalc.innerHTML = `R$ ${elem.valor_unitario * 1}`

        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src', '../imagens/icones/remover.png')
        imgRemover.setAttribute('alt', 'remover')

        divValores.appendChild(pItem)
        divValores.appendChild(divQuant)
        divValores.appendChild(pCalc)
        divValores.appendChild(imgRemover)

        divDescricaoItens.appendChild(divDescricao)
        divDescricaoItens.appendChild(divValores)

        sectionItensCarrinho.appendChild(sectionItem)


    })

}

montaTelaCarrinho()