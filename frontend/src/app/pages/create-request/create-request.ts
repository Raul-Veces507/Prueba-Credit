import {
  Component,
  inject
} from '@angular/core';

import {

  FormBuilder,
  ReactiveFormsModule,
  Validators

}
  from '@angular/forms';

import {

  CreditService

}
  from '../../core/services/credit';

@Component({

  selector: 'app-create-request',

  imports: [
    ReactiveFormsModule
  ],

  templateUrl: './create-request.html'

})

export class CreateRequest {

  private fb =
    inject(
      FormBuilder
    );

  private service =
    inject(
      CreditService
    );

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

    if (
      this.form.invalid
    ) {

      return;

    }


    this.service
      .create(
        this.form.value
      )

      .subscribe({

        next: (response) => {

          console.log(
            response
          );

          this.form.reset();

        },

        error: (error) => {

          console.log(
            error
          );

        }

      })

  }

}