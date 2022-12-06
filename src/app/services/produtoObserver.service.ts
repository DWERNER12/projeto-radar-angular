import { Injectable } from "@angular/core"
import { ProdutoServico } from "./produtoServico"

@Injectable({
    providedIn: 'root'
})

export class ProdutoObserver {
    
    constructor() { 
        this.atualizaEstoque()
    }

    
    public quantidadeProduto: Number = 0

    atualizaEstoque(){
        this.quantidadeProduto = ProdutoServico.buscaProduto().length
    }

}