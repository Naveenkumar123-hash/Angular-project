import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard, AuthGuard1 } from './guards/auth.guard';
import { UserComponent } from './user/user.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {
    path:'',
    component:FormComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'about',
    component:AboutComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard1],
    children:[
      {
        path:'user/:id',
        component:UserComponent,
      }
    ]
  },
  {
    path:'reactive',
    component:ReactiveComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
