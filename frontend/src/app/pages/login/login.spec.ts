import { FormBuilder, Validators } from '@angular/forms';

describe('Login form validation', () => {

  const fb = new FormBuilder();

  const form = fb.group({

    username: ['', Validators.required],

    password: [
      '',
      [
        Validators.required,
        Validators.minLength(4)
      ]
    ]

  });

  it('should be invalid when fields are empty', () => {

    form.patchValue({

      username:'',
      password:''

    });

    expect(
      form.valid
    ).toBeFalsy();

  });


  it('should be valid when credentials are correct', () => {

    form.patchValue({

      username:'admin',
      password:'1234'

    });

    expect(
      form.valid
    ).toBeTruthy();

  });

});