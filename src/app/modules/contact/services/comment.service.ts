import { Injectable } from '@angular/core';
import { IComment } from 'src/app/models/IComment';
import { environment } from 'src/environments/environment';
import {Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  ApiURL:string=environment.ApiUrl;
  Objeto:string="comentario";

  constructor(private http:HttpClient) { }

  All():Observable<IComment[]>{
    return this.http.get<IComment[]>(this.ApiURL + this.Objeto);
  }

  Unit(id:number){
    return this.http.get<IComment>(this.ApiURL + this.Objeto + "/" + id);
  }

  Comments(idcontact:number){
    return this.http.get<IComment[]>(this.ApiURL + "mycomments/" + idcontact);
  }
  Create(obj:IComment){
    return this.http.post<IComment>(this.ApiURL + this.Objeto, obj);
  }

  Update(id:number,obj:IComment){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<IComment>(this.ApiURL + this.Objeto+ "/" + id, obj,{headers:headers});
  }

  Delete(id:number){
    return this.http.delete(this.ApiURL + this.Objeto + "/" +  id);
  }
}
