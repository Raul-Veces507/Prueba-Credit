import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Requests } from './pages/requests/requests';
import { CreateRequest } from './pages/create-request/create-request';

import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [

{
    path:'login',
    component: Login
},

{
    path:'requests',
    component: Requests,
    canActivate:[authGuard]
},

{
    path:'create',
    component: CreateRequest,
    canActivate:[authGuard]
},

{
    path:'',
    redirectTo:'login',
    pathMatch:'full'
}

];