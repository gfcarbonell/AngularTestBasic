import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Login"
  public formLogin : FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],

    });
  }

  onSubmit() {
    const email = this.formLogin.get('email').value;
    console.log(email);
  }
}
