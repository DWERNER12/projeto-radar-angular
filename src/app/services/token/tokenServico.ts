import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { GetToken } from "../token/getToken";
import { Mensagem } from "./modeloMensagem";

export class TokenServico{

    constructor(private http:HttpClient) { }

    public async tokenValido(): Promise<Boolean | undefined> {
        try{
            let resposta:Mensagem[] | undefined = await firstValueFrom(this.http.get<Mensagem[]>(`${environment.API}/authToken`, {headers:GetToken.token()}))
            if(resposta){
                return true;
            }else{
                return false;
            }
        }catch(err){
            console.log(err)
            return false;
        }
    }

}
