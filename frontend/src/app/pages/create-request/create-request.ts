import { Component, inject } from '@angular/core';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { CreditService } from '../../core/services/credit';
import { AlertService } from '../../core/services/alert';

@Component({

  selector: 'app-create-request',

  imports: [
    ReactiveFormsModule
  ],

  templateUrl: './create-request.html'

})

export class CreateRequest {

  private fb = inject(FormBuilder);

  private service = inject(CreditService);

  private alert = inject(AlertService);

  loading = false;

  form = this.fb.group({

    applicantId: [
      '',
      Validators.required
    ],

    amount: [
      500,
      [
        Validators.required,
        Validators.min(500),
        Validators.max(50000)
      ]
    ],

    termMonths: [
      6,
      [
        Validators.required,
        Validators.min(6),
        Validators.max(60)
      ]
    ]

  });


  save() {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      this.alert.warning(
        'Validation',
        'Please complete all fields correctly'
      );

      return;
    }

    this.loading = true;

    this.service
      .create(this.form.value)

      .subscribe({

        next: () => {

          this.loading = false;

          this.alert.success(

            'Success',

            'Credit request created successfully'

          );

          this.form.reset({

            amount: 500,
            termMonths: 6

          });

        },

        error: (error) => {

          this.loading = false;

          this.alert.error(

            'Error',

            error?.error?.message ||

            'An unexpected error occurred'

          );

        }

      });

  }

}