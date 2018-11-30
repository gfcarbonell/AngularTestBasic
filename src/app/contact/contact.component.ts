import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
      this.contactForm = this.fb.group({
        name : ['', Validators.compose([Validators.required])],
        password:['', Validators.compose([Validators.required])],
        email : ['', Validators.compose([Validators.required, Validators.email])],
      });
  }
  onSubmit(){
    const name = this.contactForm.get("name").value;
    const email = this.contactForm.get("email").value;
    const password = this.contactForm.get("password").value;
    
    const data = JSON.stringify({
      name:name,
      email:email, 
      password:password
    });
    
    console.log(data);
  }
}
