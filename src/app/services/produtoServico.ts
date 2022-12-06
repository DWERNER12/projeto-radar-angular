import { Produto } from "../interface/produto";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { firstValueFrom } from "rxjs";

export class ProdutoServico {
  static buscaPorId(): Produto[] {
    throw new Error('Method not implemented.');
  }

    constructor(private http:HttpClient) { }

        public async lista(): Promise<Produto[] | undefined> {
            let produtos: Produto[] | undefined = await firstValueFrom(this.http.get<Produto[]>(`${environment.api}/produtos`))
            return produtos;
        }

 //recursos adicionais
 //==================
        public async criar(produto:Produto): Promise<Produto | undefined> {
           let produtoRest: Produto | undefined = await firstValueFrom(this.http.post<Produto>(`${environment.api}/produtos/`, produto))
           return produtoRest;
        }
        
        public async update(produto:Produto): Promise<Produto | undefined> {
            let produtoRest: Produto | undefined = await firstValueFrom(this.http.put<Produto>(`${environment.api}/produtos/${produto.id}`, produto))
            return produtoRest;
        }

        public async buscaPorId(id:Number): Promise<Produto | undefined> {
           return await  firstValueFrom(this.http.get<Produto | undefined>(`${environment.api}/produtos/${id}`))
        }

        public excluirPorId(id:Number){
            firstValueFrom(this.http.delete(`${environment.api}/produtos/${id}`))
        }
        
} 