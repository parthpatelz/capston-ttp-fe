// register.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: '',
      firstName: '',
      lastName: '',
      middleName: '',
      password: ''
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value); // Log the form values to the console
    //   // this.dataService.postData(this.registrationForm.value)
    //   //   .subscribe((response) => {
    //   //     console.log('Response:', response);
    //   //     // Optionally, show a success message to the user
    //   //   }, (error) => {
    //   //     console.error('Error:', error);
    //   //     // Optionally, show an error message to the user
    //   //   });
    //   this.registrationForm.reset();
      
    }
  }
  
}