import { Produto } from "../interface/produto";

export class ProdutoServico {

    constructor() { 
        this.atualizaEstoque()
      }
   
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
       
    

    


}