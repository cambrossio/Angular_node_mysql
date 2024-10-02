import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common'


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
      
  constructor(private tss: ToastrService){}
  ngOnInit():void{
    
  }  

  addUser(){
    if(this.name == '' || this.lastname == '' || this.credential == '' || this.email == '' || this.password == '' || this.repeatpassword == ''){
    //      console.log(this.tss)

      this.tss.error('Faltan datos','error');
      
      
      //alert("Faltan datos")
      return
    }else{
      //alert("enviaste los datos")
    }

    if (this.password != this.repeatpassword){
      //alert("Las claves son diferentes, verifica que sean iguales!")
      return
    }


  }

}
