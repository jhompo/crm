import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './components/task/task.component';
import { CommentComponent } from './components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry,MatIcon } from '@angular/material/icon';
import { MenuComponent } from './components/menu/menu.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    TaskComponent,
    CommentComponent,
    MenuComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class ContactModule { }
