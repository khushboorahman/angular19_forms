import { CommonModule } from '@angular/common';
import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Angular Forms ' + VERSION.full;

  reactiveForm = new FormGroup({
    FullName: new FormControl('', Validators.required),
    ContactNum: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.email),
    Address: new FormControl('', Validators.required)
  });

  onSubmit() {
    console.warn(this.reactiveForm.value);
  }



  // Show hide concept (Reactive and TD forms)
  isReactiveForm: boolean = true;
  isTDForm: boolean = false;

  showReactiveForm() {
    this.isTDForm = false;
    this.isReactiveForm = true;
  }

  onTDForm() {
    this.isReactiveForm = false;
    this.isTDForm = true;
  }


  empForm = {
    fullName : '',
    email : '',
    userName : '',
    pwd : '',
    confirmPwd : ''
  }

  onTDSubmit() {
    console.warn(this.empForm);
    // console.warn(JSON.stringify(this.empForm));
  }

}
