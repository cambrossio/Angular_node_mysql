import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { ErrorsService } from '../../services/errors.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string='';
  password: string='';

  loading:boolean = false;

  constructor(
    private _userServices: UserService,
    private tss: ToastrService,
    private router: Router,
    private _errorService: ErrorsService
    ){}

  logIn(){
      //VALIDACIONES
      if(this.email == '' || this.password == ''){
        this.tss.error("Debe de completar todos los campos","Error")
        return
      }

      //INGRESO AL SISTEMA
       
      const user: User = {
        email:this.email,
        password:this.password,
      }

    
    this.loading=true
    this._userServices.logIn(user).subscribe({
        next: (reponse: any) => {
          const token = reponse.token //almacenamos token en variable
          this.loading=false
          localStorage.setItem('myToken', token) //dejamos token en Almacenamiento local del navagador
          this.tss.success(`${this.email}`, "Bienvenido")
          this.router.navigate(['/dashboard'])
        },
        error: (e: HttpErrorResponse) => {
          this.loading=false
          this._errorService.messageError(e)
        },
        complete: () => console.info('complete') 
    })


  }

}
