import { HttpHeaders } from "@angular/common/http";

export class GetToken{
    public static token() {
        let head_obj = new HttpHeaders().set("Authorization","bearer "+ localStorage.getItem('token'));
        return head_obj;
    }
    
}