import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(
    public router: Router,
    public fb:FormBuilder) {

      this.loginForm = this.fb.group({
        email: ['',Validators.required],
        password: ['',Validators.required],
      });

    }

  ngOnInit(): void {

  }

  Acceder(){
    this.router.navigate(['contact/main']);
    this.alertWithSuccess();
  }


  alertWithSuccess(){
    Swal.fire('Gracias...', 'Bienvenido!', 'success')
  }

  /*erroalert()
  {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    })
  }
  topend()
  {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }*/

}
