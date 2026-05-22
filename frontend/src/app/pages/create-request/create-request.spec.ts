import { FormBuilder, Validators } from '@angular/forms';

describe('Credit request form validation', () => {

  const fb = new FormBuilder();

  const form = fb.group({

    applicantId: ['', Validators.required],

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

  it('should be invalid when amount is below minimum', () => {

    form.patchValue({

      applicantId:'12345678',
      amount:100,
      termMonths:12

    });

    expect(
      form.valid
    ).toBeFalsy();

  });


  it('should be valid with correct values',()=>{

    form.patchValue({

      applicantId:'12345678',
      amount:1000,
      termMonths:12

    });

    expect(
      form.valid
    ).toBeTruthy();

  });

});