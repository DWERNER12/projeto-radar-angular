import { HttpClient } from "@angular/common/http";
import { EventEmitter } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { GetToken } from "../token/getToken";
import { Mensagem } from "./modeloMensagem";

export class TokenServico{

    constructor(private http:HttpClient) { }
    mostrarNav = new EventEmitter<boolean>();


    public async tokenValido(): Promise<Boolean | undefined> {
        try{
            let resposta:Mensagem[] | undefined = await firstValueFrom(this.http.get<Mensagem[]>(`${environment.API}/authToken`, {headers:GetToken.token()}))
            if(resposta){
                this.mostrarNav.emit(true);
                return true;
            }else{
                this.mostrarNav.emit(false);
                return false;
            }
        }catch(err){
            this.mostrarNav.emit(false);
            return false;
        }
    }

}
