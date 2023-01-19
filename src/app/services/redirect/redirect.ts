import { ActivatedRoute, Router } from '@angular/router';

export class redirect{

    constructor(
        private router:Router
    ){}
    public redirectIt(uri:string){
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate([uri]));
     }
 }

