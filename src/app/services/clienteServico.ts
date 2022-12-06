import { Cliente } from "../interface/cliente";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { firstValueFrom } from "rxjs";


export class ClienteServico {
    constructor(private http:HttpClient) { }
    public async lista(): Promise<Cliente[] | undefined> {
        let clientes: Cliente[] | undefined = await firstValueFrom(this.http.get<Cliente[]>(`${environment.api}/clientes`))
        return clientes;
    }

    static buscaClienteId (id: Number): Cliente {
        let cliente:Cliente = {} as Cliente

        for(let i=0; i<ClienteServico.clientes.length; i++){
            let clienteDb = ClienteServico.clientes[i]
            if(clienteDb.id == id){
                cliente = clienteDb
                break
            }
        }

        return cliente;
    }
    
    private static clientes: Cliente[] = []
    
    
    public static buscaClientes():Cliente[]{
        return ClienteServico.clientes
    }

    public static adicionaCliente(cliente:Cliente):void{
        cliente.id = ClienteServico.buscaClientes().length + 1
        ClienteServico.clientes.push(cliente)
    }

    public static alteraCliente(cliente:Cliente):void{
        for(let i=0; i<ClienteServico.clientes.length; i++){
            let clienteDb = ClienteServico.clientes[i]
            if(clienteDb.id == cliente.id){
                clienteDb = {
                    ...cliente
                }
                break
            }
        }
    }

    // me delete depois
    public static excluirCliente(cliente:Cliente):void{
        let listaNova = []
        for(let i=0; i<ClienteServico.clientes.length; i++){
            let clienteDb = ClienteServico.clientes[i]
            if(clienteDb.id != cliente.id){
                listaNova.push(clienteDb)
            }
        }

        ClienteServico.clientes = listaNova
    }

    public excluirPorId(id:Number){
        firstValueFrom(this.http.delete(`${environment.api}/clientes/${id}`))
    }

    public async criar(cliente:Cliente): Promise<Cliente | undefined> {
        let clienteRest: Cliente | undefined = await firstValueFrom(this.http.post<Cliente>(`${environment.api}/clientes/`, cliente))
        return clienteRest;
     }


}




