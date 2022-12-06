import { Produto } from "../interface/produto";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { firstValueFrom } from "rxjs";

export class ProdutoServico {

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
        
}     //==============
   /*
    static buscaProdutoId (id: Number): Produto {
        let produto:Produto = {} as Produto

        for(let i=0; i<ProdutoServico.produtos.length; i++){
            let produtoDb = ProdutoServico.produtos[i]
            if(produtoDb.id == id){
                produto = produtoDb
                break
            }
        }

        return produto;
    }
    
    private static produtos: Produto[] = []
    
    
    public static buscaProduto():Produto[]{
        return ProdutoServico.produtos
    }

    public static adicionaProduto(produto:Produto):void{
        produto.id = ProdutoServico.buscaProduto().length + 1
        ProdutoServico.produtos.push(produto)
    }

    public static alteraProduto(produto:Produto):void{
        for(let i=0; i<ProdutoServico.produtos.length; i++){
            let produtoDb = ProdutoServico.produtos[i]
            if(produtoDb.id == produto.id){
                produtoDb = {
                    ...produto
                }
                break
            }
        }
    }

    public static excluirProdutos(produto:Produto):void{
        let listaNova = []
        for(let i=0; i<ProdutoServico.produtos.length; i++){
            let produtoDb = ProdutoServico.produtos[i]
            if(produtoDb.id != produto.id){
                listaNova.push(produtoDb)
                
            }
        }
        
        ProdutoServico.produtos = listaNova
        
    }

    public quantidadeProduto: Number = 0

    atualizaEstoque(){
        this.quantidadeProduto = ProdutoServico.buscaProduto.length
    }
       

}    */