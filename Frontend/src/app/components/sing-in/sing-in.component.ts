import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { ErrorsService } from '../../services/errors.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css'
})
export class SingInComponent implements OnInit {
  name:string='';
  lastname:string='';
  credential:string='';
  email:string='';
  password:string='';
  repeatpassword:string='';

  loading:boolean=false;
        
  constructor(
    private tss: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorsService
    ){}
  ngOnInit():void{
    
  }  

  addUser(){
    //VALIDACIONES

    if(this.name == '' || this.lastname == '' || this.credential == '' || this.email == '' || this.password == '' || this.repeatpassword == ''){
        this.tss.error('Todos los Datos son necesarios','error');
        return
    }
    if (this.password != this.repeatpassword){
      this.tss.warning('Las Password son distintas, verificar!','Verificar');
      return
    }

    //CREAR USUARIO EN BASE DE DATOS

    const user: User = {
      name:this.name,
      lastname:this.lastname,
      email:this.email,
      password:this.password,
      credential:this.credential
    }

    this.loading=true
    this._userService.sigIn(user).subscribe({
        next: (v) => {
          this.loading=false
          this.tss.success(`Usuario ${this.name} ${this.lastname} creado exitosamente`)
          this.router.navigate(['/logIn'])
        },
        error: (e: HttpErrorResponse) => {
          this.loading=false
          this._errorService.messageError(e)
        },
        complete: () => console.info('complete') 
    })
    
  }

}
