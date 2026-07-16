
//CRIANDO UM ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoSessao')) || [] //array onde todos os itens do carrinho estão guardados

//const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []

//FUNÇÃO QUE CRIA O ITEM (que é diferente do produto)
const item = (objProduto) => { 

    const item = {
        id_produto: objProduto.id_produto,
        descricao_produto: objProduto.descricao_produto,
        valor_unitario: objProduto.valor_unitario,
        caminho_imagem: objProduto.caminho_imagem,
        quantidade: 1
    }

    return item

}

// FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (ObjItem) => {

    const novoItem = item(ObjItem) //expecifica quem é o item a ser add no carrinho)

    const indice = itensCarrinho.findIndex(elem => elem.id_produto === ObjItem.id_produto) //compara o id do produto (ou novo item) com o id dos itens dentro do carrinho

    if (indice === -1) {

        itensCarrinho.push(novoItem) //envia o novo item caso não tenha um igual no carrinho

    } else {itensCarrinho[indice].quantidade++} //aumenta a quantidade do produto ja existente se o usuario tentar adicinar ele novamente


    sessionStorage.setItem("carrinhoSessao", JSON.stringify(itensCarrinho)); //traduz para JSON

    console.log(itensCarrinho)
}
//ALTERA A QUANIDADE DO PRODUTO DE ACORDO COM O INPUT DO USUARIO
const novaQuant = (i, quantidade) => {

    console.log("i recebido:", i)
    console.log("tamanho array:", itensCarrinho.length)
    console.log(itensCarrinho)

    itensCarrinho[i].quantidade = quantidade

    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))
    

    itensCarrinho[i].quantidade = quantidade

    sessionStorage.setItem(
        'carrinhoSessao',
        JSON.stringify(itensCarrinho)
    )
}

//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.getItem('carrinhoSessao'))

    return listaItens
}

//FUNÇÃO PRA REMOVER ITEM DO ARRAY  
const removeItem = (i) => {

    itensCarrinho.splice(i,1)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))

}


//EXPORTANDO
export { addItem, listItens, removeItem, novaQuant }


