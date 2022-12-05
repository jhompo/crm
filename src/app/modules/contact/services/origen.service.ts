import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrigen } from 'src/app/models/IOrigen';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrigenService {

  ApiURL:string=environment.ApiUrl;
  Objeto:string="origen";

  constructor(private http:HttpClient) { }

  All():Observable<IOrigen[]>{
    return this.http.get<IOrigen[]>(this.ApiURL + this.Objeto);
  }
}
