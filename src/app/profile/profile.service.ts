import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  constructor(public http:HttpClient) { }

  getdataFn(): Observable<any>{
      return this.http.get("https://dummyjson.com/users")
  }

  getuserFn(id:number): Observable<any>{
    return this.http.get(`https://dummyjson.com/users/${id}`)
}
}

