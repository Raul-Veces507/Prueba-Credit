import {
Component,
inject,
OnInit
} from '@angular/core';

import {
CommonModule
} from '@angular/common';

import {
FormsModule
} from '@angular/forms';

import {
CreditService
} from '../../core/services/credit';

@Component({

selector:'app-requests',

standalone:true,

imports:[
CommonModule,
FormsModule
],

templateUrl:'./requests.html'

})

export class Requests implements OnInit{

private service=
inject(
CreditService
);

requests:any[]=[];

status='';

ngOnInit(){

this.load();

}

load(){

this.service
.getAll(
this.status
)

.subscribe({

next:(response:any)=>{

this.requests=
response.data;

},

error:(error)=>{

console.log(
error
);

}

});

}


changeStatus(

id:number,
status:string

){

this.service
.updateStatus(

id,

{

status,
comment:'Updated from frontend'

}

)

.subscribe({

next:()=>{

this.load();

}

});

}

}