import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicationform',
  templateUrl: './applicationform.component.html',
  styleUrls: ['./applicationform.component.css']
})
export class ApplicationformComponent implements OnInit {
  form!: FormGroup
 
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      province: new FormControl(null, [Validators.required]),
      postalcode: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      info: new FormControl(null, [Validators.required]),
      pay: new FormControl(null, [Validators.required]),
      yes: new FormControl(null, [Validators.required]),
      no: new FormControl(null, [Validators.required]),
    })
  }
  onSubmit() {
    console.log(this.form.value);
    
  }
}
