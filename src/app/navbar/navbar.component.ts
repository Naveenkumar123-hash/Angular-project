import { Component, OnInit } from '@angular/core';
import { FormsService } from '../form/forms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
   constructor(public formsrv:FormsService,private router:Router){}
  
   logout():void{
     this.formsrv.userloggedout=true,
     this.formsrv.userloggedIn=false,
     localStorage.removeItem("auth")
     this.router.navigate(['/'])
     this.formsrv.userloggedout=false
     this.formsrv.localvalue=false
     this.formsrv.localvalue1=false
   }
}
