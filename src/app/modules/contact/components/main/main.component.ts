import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IContact } from 'src/app/models/IContact';
import { ITask } from 'src/app/models/ITask';
import { ComunicatorService } from 'src/app/services/comunicator.service';
import Swal from 'sweetalert2';
import { ContactService } from '../../services/contact.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Contatos:IContact[] = [];
  tmpContactos:IContact[] = [];
  form:FormGroup;

  constructor(private service:ContactService,
              private serviceTask:TaskService,
              private comunicator:ComunicatorService,
              public router:Router, fb:FormBuilder) {

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

  CreateTask(opcion:number,id:any){
    let accion ="Ninguna";
    switch(opcion){
      case 1: accion = "Llamada Telefonica"; break;
      case 2: accion = "Mensaje de Texto"; break;
      case 3: accion = "Llamada Whatsapp"; break;
      case 4: accion = "Mensaje Whatsapp"; break;

    }

    const obj:ITask={
       id_contact:id,
       tarea:accion,
       responsable:"Marco Dubbeld"
     };

    this.serviceTask.Create(obj).subscribe(data => {
        //console.log("INSERT: " + obj);

        //ENVIO DEL OBJETO A SUSCRIPTORES A SUSCRIPTORES
       // this.comunicator.sendObject(data);

        this.router.navigate(["/contact/task/"+id]);

        Swal.fire(
          'Registro Guardado!',
          'Hacer clic en el boton!',
          'success'
        );

      },
      error=>{console.log(error)
    });
  }


  confirmBox(id:any){
    Swal.fire({
      title: 'Está seguro de eliminarlo?',
      text: 'No podra recuperar este registro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, no estoy seguro'
    }).then((result) => {
      if (result.value) {
         this.delContact(id);

      } /*else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'tu registro está seguro',
          'error'
        )
      }*/
    })
  }

  delContact(id:any){

    this.service.Delete(id).subscribe(
      data=>{ console.log(data);
             this.getContactos(); }
      ,error=>{console.log(error)}
    );
  }

  showTask(idcontact:any){
     this.router.navigate(['contact/task/'+idcontact]);
  }

  showComment(idcontact:any){
    this.router.navigate(['contact/comment/'+idcontact]);
 }
}
