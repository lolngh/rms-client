import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RationModel } from '../model/RationShop';
import { Revenue } from '../model/Revenue';

@Injectable({
  providedIn: 'root'
})
export class RationService {
private url :string | undefined;
  constructor(private http: HttpClient) { 
    this.url="http://localhost:8080/api";
  }

  displayRationShops():Observable<any>{
     return this.http.get(this.url+'/ration');
  }

  addRation(ration: RationModel):Observable<Object>{
     return this.http.post(this.url+'/ration',ration);
  }

  rationShopById(id:number):Observable<any>{
    return this.http.get(this.url+`/rationshop/${id}`);
  }

  deleteRationShop(id:number):Observable<any>{
    return this.http.delete(this.url+`/ration/${id}`,{responseType: 'text'});
  }

  updateRevenue(id:number,revenue:Revenue):Observable<any>{
    return this.http.put(this.url+`/revenue/${id}`,revenue);
  }

  updateRation(id:number,ration:RationModel):Observable<any>{
    return this.http.put(this.url+`/change/${id}`,ration);
  }

  listRationShopsByState():Observable<any>{
    return this.http.get(this.url+'/ration/state');
  }
}
