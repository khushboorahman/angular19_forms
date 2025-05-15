import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Forms ' + VERSION.full;

  reactiveForm = new FormGroup({
    FullName : new FormControl('', Validators.required),
    ContactNum : new FormControl('', Validators.required),
    Email : new FormControl('', Validators.email),
    Address : new FormControl('', Validators.required)
  });

  onSubmit() {
    console.warn(this.reactiveForm.value);
  }
}
