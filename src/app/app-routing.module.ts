import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ContactModule } from './modules/contact/contact.module';

const routes: Routes = [
  //{path:'*',component:AppComponent},
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',loadChildren:()=>import("./modules/contact/contact.module").then(m=>ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
