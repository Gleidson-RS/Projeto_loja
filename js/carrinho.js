//CRIANDO UM ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoSessao')) || []
//const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []

//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (ObjItem)=>{
    itensCarrinho.push(ObjItem)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))

}

//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.getItem('carrinhoSessao'))

    return listaItens
}


//EXPORTANDO
export { addItem, listItens }