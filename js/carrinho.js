//CRIANDO UM ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoSessao')) || [] //array onde todos os itens do carrinho estão guardados
//const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []

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

    itensCarrinho.spluce(pos,1)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))

}


//EXPORTANDO
export { addItem, listItens, removeItem }