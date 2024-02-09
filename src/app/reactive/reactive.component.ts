import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsService } from '../form/forms.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent {
     constructor(public formsrv:FormsService){}
     
onsubmit() {
    localStorage.setItem("formdetails",JSON.stringify(this.my_form.value))
    this.formsrv.saved=true
}

// changefn() {
//     this.name.setValue('abc')
// }
//     name=new FormControl('')
//   profileForm = new FormGroup({
//      firstName: new FormControl(''),
//      lastName: new FormControl(''),
// })
       my_form:FormGroup=new FormGroup({
             name:new FormControl(''),
             age:new FormControl(''),
             address:new FormGroup({
                  street:new FormControl(''),
                  place:new FormControl(''),
                  zipcode:new FormControl('')
             }),
             qualification:new FormGroup({
                  college:new FormGroup({
                    degree:new FormControl(''),
                    passedout:new FormControl('')
                  })
             })

       })
  }

