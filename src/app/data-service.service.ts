import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  //  readonly  apiUrl:"https://api.github.com/user";

  private _listeners=new Subject<any[]>();

  shareDataSubject = new Subject<any>(); 
 
     sendDataToOtherComponent(somedata:any){
      this.shareDataSubject.next(somedata);
  }


  listen():Observable<any>{
    return this._listeners.asObservable();
  }

   getData():Observable<any>{
     return this.http.get('https://api.github.com/users');
   }

   serachData():Observable<any> {
     return this.http.get<string>('https://api.github.com/users');
   }

   filter(filterBy:any) {
    this._listeners.next(filterBy);
  }
}

