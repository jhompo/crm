import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * SERVICIO QUE PERMITIRA ENVIAR
 * CUALQUIER OBJETO ENTRE COMPONENTES
 */
export class ComunicatorService {

  private Obj = new BehaviorSubject<any>({} as any);
  currentObj$ = this.Obj.asObservable();

  constructor() { }

  sendObject(obj:any){
    this.Obj.next(obj);
  }
}
