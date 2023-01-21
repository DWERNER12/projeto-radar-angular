import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from "rxjs/internal/firstValueFrom";
import { Cliente } from "src/app/models/modeloCliente";
import { environment } from "src/environments/environment";
import { GetToken } from "../redirect/getToken";


export class ClienteServico{

    constructor(private http:HttpClient) { }

    public async listarClientes(): Promise<Cliente[] | undefined> {
        
        let clientes:Cliente[] | undefined = await firstValueFrom(this.http.get<Cliente[]>(`${environment.API}/clientes`, {headers:GetToken.token()}));
        return clientes;
    }

    public async criarCliente(cliente:Cliente): Promise<Cliente | undefined> {
        let clienteRest:Cliente | undefined = await firstValueFrom(this.http.post<Cliente>(`${environment.API}/clientes/`, cliente , {headers:GetToken.token()}))
        console.log(cliente);
        return clienteRest;
    }

    public async editarCliente(cliente:Cliente): Promise<Cliente | undefined> {
        let clienteRest:Cliente | undefined = await firstValueFrom(this.http.put<Cliente>(`${environment.API}/clientes/${cliente.id}`, cliente, {headers:GetToken.token()}))
        return clienteRest;
    }

    public async buscarClientePorId(id:Number): Promise<Cliente | undefined> {
        return await firstValueFrom(this.http.get<Cliente | undefined>(`${environment.API}/clientes/${id}`, {headers:GetToken.token()}))
    }

    public async buscarClientePorCPF(cpf:string): Promise<Cliente | undefined> {
        return await firstValueFrom(this.http.get<Cliente | undefined>(`${environment.API}/clientes/cpf/${cpf}`,{headers:GetToken.token()}))
    }

    public async excluirClientePorId(id:Number) {
        await firstValueFrom(this.http.delete(`${environment.API}/clientes/${id}`,{headers:GetToken.token()}))
    }
    
    public async listarTamanhoClientes(): Promise<undefined> {
        let tamanhoCliente: number | any = await (await firstValueFrom(this.http.get<Cliente[]>(`${environment.API}/clientes`,{headers:GetToken.token()}))).length
        return tamanhoCliente;
    }
}