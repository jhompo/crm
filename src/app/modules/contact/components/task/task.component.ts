import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/ITask';
import { TaskService } from '../../services/task.service';
import { Subscription } from 'rxjs';
import { ComunicatorService } from 'src/app/services/comunicator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  Tasks:ITask[] = [];
  myid:number = 0;

  constructor(private service:TaskService,
             private rutparam:ActivatedRoute,
             private comunicator:ComunicatorService) { }

  ngOnInit(): void {

      this.myid = this.rutparam.snapshot.params["id"];

      if(this.myid!= 0 && this.myid!=undefined){
        this.showTaskClient(this.myid);

      }else{
        this.getTask();
      }



  }



  /**
   * OBTIENE TODAS LAS TAREAS REALIZADAS
   * A TODOS LOS CLIENTES
   */
  getTask(){
    this.service.All().subscribe(
      data =>{
        console.log(data);
        this.Tasks = data;
      },
      error =>{ console.log(error); }
    );
  }

  /**
   * OBTIENE LAS TAREAS REALIZADA A
   * UN DETERMINADO CLIENTE
   * @param idcontact
   */
  showTaskClient(idcontact:number){
    this.service.Tasks(idcontact).subscribe(
      data=>{
        console.log(data);
        this.Tasks = data;
      },
      error=>{
        console.log(error);
      }
    );

  }

}
