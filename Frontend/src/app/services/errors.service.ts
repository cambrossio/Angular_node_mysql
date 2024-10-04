import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor(private tss: ToastrService) { }
  
   messageError(e:HttpErrorResponse){
    if (e.error.msg){
      this.tss.warning(e.error.msg, `Error`)
    }else{
      this.tss.error(`Ocurrio un error en el servidor`, `Error Server`)
    } 
  }
}
