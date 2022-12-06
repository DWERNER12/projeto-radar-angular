import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { ProdutoServico } from "./produtoServico"

@Injectable({
    providedIn: 'root'
})

export class ProdutoObserver {

    constructor(private http: HttpClient) {
        this.atualizaEstoque()
    }


    public quantidadeProduto: Number = 0

    async atualizaEstoque() {
        let lista = await new ProdutoServico(this.http).lista();
        this.quantidadeProduto = lista ? lista.length : 0;
    }

}