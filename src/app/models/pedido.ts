import { Produto } from "src/app/interface/produto"


export class Pedido{
    public id:Number = 0
    public idCliente:Number = 0
    public data:Date = new Date()
    public itens:Produto[] = []

    public valorTotal():Number{
        // calcular o valor dos this.itens
        for (let i = 0; i < this.itens.length; i++) {}
        return 0; 
<<<<<<< HEAD
    }
=======
    } 
>>>>>>> 1d182f087a28782bab9355acddf4768e61221e76


}