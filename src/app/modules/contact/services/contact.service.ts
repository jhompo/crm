import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  ApiURL:string=environment.ApiUrl;
  Objeto:string="contact";

  constructor(private http:HttpClient) { }

  All():Observable<IContact[]>{
    return this.http.get<IContact[]>(this.ApiURL + this.Objeto);
  }

  Unit(id:number){
    return this.http.get<IContact>(this.ApiURL + this.Objeto + "/" + id);
  }

  Create(obj:IContact){
    return this.http.post<IContact>(this.ApiURL + this.Objeto, obj);
  }

  Update(id:number,obj:IContact){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<IContact>(this.ApiURL + this.Objeto+ "/" + id, obj,{headers:headers});
  }


  Delete(id:number){
    return this.http.delete(this.ApiURL + this.Objeto + "/" +  id);
  }
}
