import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{

   id: string = '';
   subscriptions: Subscription[] = []
   userdata:any={}
    
    constructor(public profilesrcv:ProfileService,private route:ActivatedRoute,private router:Router){}
    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id') as string;
      this.profilesrcv.getuserFn(parseInt(this.id)).subscribe((res)=>{
        this.userdata=res
     })
      // Subscribe to router events to remount the component on route change
     let routerSub =  this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.id = this.route.snapshot.paramMap.get('id') as string;
        this.profilesrcv.getuserFn(parseInt(this.id)).subscribe((res)=>{
          this.userdata=res
       })
      });
      this.subscriptions.push(routerSub)
    }
  
  
    ngOnDestroy(): void {
     this.subscriptions.forEach((sub)=>{
      sub.unsubscribe()
     })
    }
}
