// Resolva a questão 1 aqui

type Pedido = {
    id: number
    cliente: string
    valor: number
    entregue: boolean
}

function filtrarPedidosEntregues(pedidos: Pedido[]): Pedido[] {
    return pedidos.filter((p) => p.entregue === true);
}

function calcularTotalPedidos(pedidos: Pedido[]): number {
    return pedidos.reduce((soma, p) => { return soma + p.valor} , 0);
}

/*function calcularTotalPedidos(pedidos: Pedido[]): number {
    return pedidos.reduce((soma, p) => soma + p.valor, 0);
  }*/

type PedidoSemId = Omit<Pedido, "id">  
  