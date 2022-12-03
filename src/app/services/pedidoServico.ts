import { Pedido } from "../models/pedido"

export class PedidoServico{
    private static pedido:Pedido
    public static get():Pedido{
        if(!PedidoServico.pedido){
            PedidoServico.pedido = new Pedido()
        }

        return PedidoServico.pedido
    }
}