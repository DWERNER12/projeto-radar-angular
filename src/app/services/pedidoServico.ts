import { Pedido } from "../models/pedido"

export class PedidoServico{
    private static pedido:Pedido
    public static get():Pedido{
        if(!PedidoServico.pedido){
            PedidoServico.pedido = new Pedido()
        }

        return PedidoServico.pedido
<<<<<<< HEAD
    }
=======
    } 
>>>>>>> 1d182f087a28782bab9355acddf4768e61221e76



    
}