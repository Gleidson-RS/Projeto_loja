//CRIANDO UM ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoSessao')) || [] //array onde todos os itens do carrinho estão guardados

//const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []

//FUNÇÃO ITEM
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

console.log(itensCarrinho.findIndex(elem => elem.id_produto == 1))

//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (ObjItem) => {
    itensCarrinho.push(ObjItem);

    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho));

    console.log(sessionStorage.getItem('carrinhoSessao'));

    console.log("Adicionando:", ObjItem);
}

//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.getItem('carrinhoSessao'))

    return listaItens
}

//FUNÇÃO PRA REMOVER ITEM DO ARRAY  
const removeItem = (pos) => {

    itensCarrinho.splice(pos,1)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))

}


//EXPORTANDO
export { addItem, listItens, removeItem }