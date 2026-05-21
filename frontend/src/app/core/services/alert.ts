import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn:'root'
})

export class AlertService {

  success(title:string,message:string){ 

    return Swal.fire({

      icon:'success',

      title,

      text:message,

      timer:2000,

      showConfirmButton:false

    });

  }


  error(title:string,message:string
  ){

    return Swal.fire({

      icon:'error',

      title,

      text:message

    });

  }


  warning(title:string,message:string
  ){

    return Swal.fire({

      icon:'warning',

      title,

      text:message

    });

  }


  confirm(title:string,message:string
  ){

    return Swal.fire({

      icon:'question',

      title,

      text:message,

      showCancelButton:true,

      confirmButtonText:'Yes',

      cancelButtonText:'Cancel'

    });

  }

}