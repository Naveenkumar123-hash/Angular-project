import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  localvalue:boolean=false
  localvalue1:boolean=false
  value:any={}
  userloggedIn:boolean=false
  userloggedout:boolean=false
  saved:boolean=false

  constructor() { }
  setname(name: string, role: string): void {
    if (localStorage.getItem("auth")) {
      this.userloggedIn=true
      this.localvalue=true;
      this.userloggedout=true
      this.value = JSON.parse(localStorage.getItem("auth") as string);
      this.localvalue1=this.value?.role==="admin"?true:false
    } else {
      localStorage.setItem("auth", JSON.stringify({ name: name, role: role }));
      this.value={name:name,role:role}
      this.userloggedIn=true;
      this.userloggedout=true
      this.localvalue = true;
      this.localvalue1=role==="admin"?true:false
    }
  }
}
