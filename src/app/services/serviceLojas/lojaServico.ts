import { Loja } from './../../models/modeloLoja';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from "rxjs/internal/firstValueFrom";
import { environment } from "src/environments/environment";
import { GetToken } from '../token/getToken';

export class LojaServico{

    constructor(private http:HttpClient) { }

    public async listarLojas(): Promise<Loja[] | undefined> {;
        let loja:Loja[] | undefined = await firstValueFrom(this.http.get<Loja[]>(`${environment.API}/lojas`,{headers:GetToken.token()}))
        return loja;
    }

    public async criarLoja(loja:Loja): Promise<Loja | undefined> {
        let lojaRest:Loja | undefined = await firstValueFrom(this.http.post<Loja>(`${environment.API}/lojas/`, loja,{headers:GetToken.token()}))
        return lojaRest;
    }

    public async editarLoja(loja:Loja): Promise<Loja | undefined> {
        let lojaRest:Loja | undefined = await firstValueFrom(this.http.put<Loja>(`${environment.API}/lojas/${loja.id}`, loja,{headers:GetToken.token()}))
        return lojaRest;
    }

    public async buscarLojaPorId(id:Number): Promise<Loja | undefined> {
        return await firstValueFrom(this.http.get<Loja | undefined>(`${environment.API}/lojas/${id}`,{headers:GetToken.token()}))
    }

    public excluirLojaPorId(id:Number) {
        firstValueFrom(this.http.delete(`${environment.API}/lojas/${id}`,{headers:GetToken.token()}))
    }
    
}