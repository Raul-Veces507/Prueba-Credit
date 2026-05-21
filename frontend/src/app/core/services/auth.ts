import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  http =inject(HttpClient);

  api ='http://localhost:3000/api/v1';

  login(data: any) {

    return this.http.post(`${this.api}/auth/login`,data).pipe(

      tap(
        (res: any) => {
          localStorage.setItem('token',res.data.token );

        })

    );}

  logout() {

    localStorage.removeItem(
      'token'
    );

  }

}