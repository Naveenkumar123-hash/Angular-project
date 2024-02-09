import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
type User= {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  domain: string;
  ip: string;
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    department: string;
    name: string;
    title: string;
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
 }

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit,OnDestroy{
   constructor(private Usersrv:ProfileService,private router:Router){

   }
  
  usersData: User[] = [];
  profilesubscription:Subscription[]=[]

  ngOnInit(): void {
    const profilesub=this.Usersrv.getdataFn().subscribe((res)=>{
      this.usersData=res.users
    })
    this.profilesubscription.push(profilesub)
  }

  getuser(id:number) {
        this.router.navigate([`/profile/user/${id}`])
  }
  
  ngOnDestroy(): void {
    this.profilesubscription.forEach((res)=>{
      res.unsubscribe()
    })
  }
 }

