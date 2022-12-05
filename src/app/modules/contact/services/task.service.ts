import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/models/ITask';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  ApiURL:string=environment.ApiUrl;
  Objeto:string="task";

  constructor(private http:HttpClient) { }

  All():Observable<ITask[]>{
    return this.http.get<ITask[]>(this.ApiURL + this.Objeto);
  }

  Unit(id:number){
    return this.http.get<ITask>(this.ApiURL + this.Objeto + "/" + id);
  }

  Tasks(idcontact:number){
    console.log(this.ApiURL + "mytasks/" + idcontact);
    return this.http.get<ITask[]>(this.ApiURL + "mytasks/" + idcontact);
  }

  Create(id:number,obj:ITask){
    return this.http.post<ITask>(this.ApiURL + this.Objeto, obj);
  }

  Update(id:number,obj:ITask){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<ITask>(this.ApiURL + this.Objeto+ "/" + id, obj,{headers:headers});
  }

  Delete(id:number){
    return this.http.delete(this.ApiURL + this.Objeto + "/" +  id);
  }
}
