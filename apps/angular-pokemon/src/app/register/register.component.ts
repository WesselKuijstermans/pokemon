import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pokemon-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
registerForm = new FormGroup({
  username: new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]),
  email: new FormControl("",[
    Validators.required,
    Validators.email
    
  ]),
  password: new FormControl("", [
    Validators.required,
  ])
});
  
register() {
throw new Error('Method not implemented.');
}

  
}
