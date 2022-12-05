import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IContact } from 'src/app/models/IContact';
import { ITask } from 'src/app/models/ITask';
import { ComunicatorService } from 'src/app/services/comunicator.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Contatos:IContact[] = [];
  tmpContactos:IContact[] = [];
  form:FormGroup;

  constructor(private service:ContactService, private comunicator:ComunicatorService, public router:Router, fb:FormBuilder) {
    this.form = fb.group({
      filter:new FormControl(''),
    })
  }


  ngOnInit(): void {
    this.getContactos();
  }


  getContactos(){
    this.service.All().subscribe(
      data =>{
        console.log(data);
        this.Contatos = data;
        this.tmpContactos = data;
      },
      error =>{ console.log(error); }
    );
  }

  search(buscar:string){

    console.log("buscar:"+buscar)

      this.Contatos = this.tmpContactos; //RESET DE BUSQUEDA GLOBAL
      if(buscar !=""){
          //this.Contatos = this.Contatos.filter(obj => obj.nombre!.indexOf(buscar) >-1 );
          this.Contatos = this.Contatos.filter(obj => {

            let myobj:any;
            if(obj.nombre?.toLowerCase().indexOf(buscar) >-1 ){
                myobj = obj.nombre!.toLowerCase().indexOf(buscar) >-1;
            }
            if(obj.apellidos?.toLowerCase().indexOf(buscar) >-1){
                myobj = obj.apellidos!.toLowerCase().indexOf(buscar) >-1;
            }
            if(obj.email?.toLowerCase().indexOf(buscar) >-1){
                myobj = obj.email!.toLowerCase().indexOf(buscar) >-1;
            }

            return myobj;
          });

      }
  }

  countItems(obj:any) {
    return Object.keys(obj).length;
  }

  showTask(idcontact:any){
     this.router.navigate(['contact/task/'+idcontact]);
  }

  showComment(idcontact:any){
    this.router.navigate(['contact/comment/'+idcontact]);
 }
}
