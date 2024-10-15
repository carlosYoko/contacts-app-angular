import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

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
  contactId: number | undefined;
  action = "Crear";

  constructor(private readonly fb: FormBuilder,
    private readonly contactService: ContactService,
    private readonly route: Router,
    private readonly snackBar: MatSnackBar,
    private readonly aRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      registerDate: ['', Validators.required],
      telephone: ['', Validators.required],
      sex: ['', Validators.required],
    });

    const idParam = 'id'
    this.contactId = this.aRoute.snapshot.params[idParam]

  }

  ngOnInit(): void {
    if (this.contactId !== undefined) {
      this.action = "Editar"
      this.contactToEdit();
    }
  }

  saveContact(): void {
    const contact: Contact = {
      fullName: this.myForm.get('fullName')?.value,
      email: this.myForm.get('email')?.value,
      entryDate: this.myForm.get('registerDate')?.value,
      phone: this.myForm.get('telephone')?.value,
      sex: this.myForm.get('sex')?.value,
    }

    if (this.contactId !== undefined) {
      this.editContact(contact);
    } else {
      this.addContact(contact);
    }

  }

  contactToEdit(): void {
    const contact: Contact = this.contactService.getContact(this.contactId!)
    this.myForm.patchValue({
      fullName: contact.fullName,
      email: contact.email,
      registerDate: contact.entryDate,
      telephone: contact.phone,
      sex: contact.sex,
    })
  }

  addContact(contact: Contact): void {
    this.contactService.addContact(contact)
    this.route.navigate(['/']);
    this.snackBar.open('Contacto agregado', '', {
      duration: 2000
    })
  }

  editContact(contact: Contact): void {
    this.contactService.editContact(contact, this.contactId!)
    this.route.navigate(['/']);
    this.snackBar.open('Contacto editado', '', {
      duration: 2000
    })
  }

}
