import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseURL = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  getAllStocks(query,limit,skip){
   return this.http.post(this.baseURL+'getAllStocks/'+limit+'/'+skip,JSON.parse(query));
  }
  getCount():any{
    this.http.get(this.baseURL+'getCount').subscribe((data :JSON)=>{
        return data[0];
    })
  }
  getAllStockspromise(query,limit,skip){
    return this.http.post(this.baseURL+'getAllStocks/'+limit+'/'+skip,JSON.parse(query)).toPromise();
   }
}
