import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../../../core/services/auth';

@Component({

  selector: 'app-layout',

  imports: [
    RouterModule
  ],

  templateUrl: './layout.html'

})

export class Layout {

  private authService = inject(AuthService);

  private router = inject(Router);


  logout() {

    this.authService.logout();

    this.router.navigate(['/login']);

  }

}