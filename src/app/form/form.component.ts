import { Component } from '@angular/core';
import { FormsService } from './forms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(public formsrv:FormsService,public route:Router){
    
  }
  navigatetopage():void{
      this.route.navigate(['/home'])
  }
    name:string=''
    role:string=''
    submit():void{
        this.formsrv.setname(this.name,this.role)
        this.navigatetopage()
    }
}


