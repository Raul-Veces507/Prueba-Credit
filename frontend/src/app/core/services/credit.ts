import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'

})

export class CreditService {

  http = inject(HttpClient);

  api = 'http://localhost:3000/api/v1/credit-requests';


  create(data: any) {

    return this.http.post(this.api, data);

  }


  getAll(status = '') {

    return this.http.get(`${this.api}?status=${status}`);

  }


  updateStatus(id: number, data: any) {

    return this.http.patch(`${this.api}/${id}/status`, data);

  }

  getHistory(id: number) {

    return this.http.get(`${this.api}/${id}/history`

    );

  }

}