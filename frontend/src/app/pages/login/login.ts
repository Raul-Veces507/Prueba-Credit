import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth';

import { AlertService } from '../../core/services/alert';



@Component({

    selector: 'app-login',

    imports: [
        ReactiveFormsModule
    ],

    templateUrl: './login.html'

})

export class Login {

    private alert = inject(AlertService);

    private fb = inject(FormBuilder);

    private authService = inject(AuthService);

    private router = inject(Router);

    loading = false;

    form = this.fb.group({

        email: [
            'admin@test.com',
            [
                Validators.required,
                Validators.email
            ]
        ],
        password: [
            '123456',
            Validators.required
        ]

    });


    login() {
        
        if (this.form.invalid) {
             this.alert.error('Error', "Debe completar todos los campos correctamente");
            this.form.markAllAsTouched();
            return;
        }


        this.loading = true;

        this.authService.login(this.form.value).subscribe({
            next: () => {

                this.router.navigate(['/requests']);
       
            },

            error: (error) => {

                this.alert.error('Error', error.error.message);
                this.loading = false;

            }

        })

    }

}