import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITipo } from 'src/app/models/ITipo';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  ApiURL:string=environment.ApiUrl;
  Objeto:string="tipo";

  constructor(private http:HttpClient) { }

  All():Observable<ITipo[]>{
    return this.http.get<ITipo[]>(this.ApiURL + this.Objeto);
  }
}
