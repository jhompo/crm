import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/models/IContact';
import { IOrigen } from 'src/app/models/IOrigen';
import { ITipo } from 'src/app/models/ITipo';
import { ContactService } from '../../services/contact.service';
import { OrigenService } from '../../services/origen.service';
import { TipoService } from '../../services/tipo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  form:FormGroup;
  Accion="Agregar";
  myid = 0;
  lstTipo:ITipo[] =[];
  lstOrigen:IOrigen[]=[];

  constructor(private fb:FormBuilder,
    private service:ContactService,
    private serviceTipo:TipoService,
    private serviceOrigen:OrigenService,
    private router:Router,
    private rutparam:ActivatedRoute) {

    this.form=this.fb.group({
       nombre:['',Validators.required],
       apellidos:['',Validators.required],
       email:['',Validators.required],
       telefono:[''],
       genero:[''],
       fecha_nacimiento:[''],
       direccion:[''],
       id_tipo:[''],
       id_origen:['']
    })
   }

  ngOnInit(): void {

    this.myid = this.rutparam.snapshot.params["id"];

    this.serviceOrigen.All().subscribe(
      data=>{ this.lstOrigen = data }
    );

    this.serviceTipo.All().subscribe(
      data=>{ this.lstTipo = data }
    );


    //EDITAR COLOCAR VALORES EN CADA CAMPO
    if(this.myid!= 0){
      this.service.Unit(this.myid).subscribe(data=>{
        console.log(data);
        this.form.patchValue({
           nombre:data.nombre,
           apellidos:data.apellidos,
           email:data.email,
           telefono:data.telefono,
           genero:data.genero,
           fecha_nacimiento:data.fecha_nacimiento,
           direccion:data.direccion,
           id_tipo:data.id_tipo,
           id_origen:data.id_origen
        })

      },error=>{ console.log(error)})

    }
  }


  saveContact(){

    if(this.myid== undefined){

      const obj:IContact={
           nombre:this.form.get('nombre')?.value,
           apellidos:this.form.get('apellidos')?.value,
           email:this.form.get('email')?.value,
           telefono:this.form.get('telefono')?.value,
           genero:this.form.get('genero')?.value,
           fecha_nacimiento:this.form.get('fecha_nacimiento')?.value,
           direccion:this.form.get('direccion')?.value,
           id_tipo:this.form.get('id_tipo')?.value,
           id_origen:this.form.get('id_origen')?.value,
      };

      this.service.Create(obj).subscribe(data => {
          console.log("INSERT: " + data);
          this.router.navigate(["/contact/main"]);
        },
        error=>{console.log(error)
      });

  }else{

      const obj2:IContact={
           id:this.myid,
           nombre:this.form.get('nombre')?.value,
           apellidos:this.form.get('apellidos')?.value,
           email:this.form.get('email')?.value,
           telefono:this.form.get('telefono')?.value,
           genero:this.form.get('genero')?.value,
           fecha_nacimiento:this.form.get('fecha_nacimiento')?.value,
           direccion:this.form.get('direccion')?.value,
           id_tipo:this.form.get('id_tipo')?.value,
           id_origen:this.form.get('id_origen')?.value,
      };

      this.service.Update(this.myid,obj2).subscribe(data => {
         console.log("UPDATE: " + data);
         this.router.navigate(["/contact/main"]);
      },
      error=>{console.log(error)});
  }
  }
}
