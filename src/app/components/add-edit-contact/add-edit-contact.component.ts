import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' }
  }]
})

export class AddEditContactComponent {
  myForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.myForm = this.fb.group({
      fullName: [''],
      email: [''],
      registerDate: [''],
      telephone: [''],
      sex: [''],
    });
  }
}
