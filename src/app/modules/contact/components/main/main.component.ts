import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Contatos:IContact[] = [];
  constructor(private service:ContactService) { }

  ngOnInit(): void {
    this.getContactos();
  }


  getContactos(){
    this.service.All().subscribe(
      data =>{
        console.log(data);
        this.Contatos = data;
      },
      error =>{ console.log(error); }
    );
  }
}
