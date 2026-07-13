//CRIANDO UM ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoSessao')) || []
//const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []

//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (ObjItem)=>{
    itensCarrinho.push(ObjItem)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))

    listItens()
}

//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () =>{
    const listaItens = JSON.parse(sessionStorage.getItem('carrinhoSessao'))

    montaTelaCarrinho(listItens)
}

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

    const pIten = document.createElement('p')
    pIten.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).repeat('.',',')}`

    const inputQuantidade = document.createElement('input')
    inputQuantidade.setAttribute('type', 'number')
    inputQuantidade.setAttribute('name', `quant${i}`)
    inputQuantidade.setAttribute('id', `quant${i}`)
    inputQuantidade.setAttribute('class', 'input-item')
    inputQuantidade.setAttribute('value', '1')
    

    
    })
    
}


//EXPORTANDO
export {addItem}