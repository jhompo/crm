import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './components/comment/comment.component';
import { MainComponent } from './components/main/main.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {path:'main',component:MainComponent},
  {path:'task',component:TaskComponent},
  {path:'comment',component:CommentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
