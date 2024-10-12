import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  listContact: Contact[] = [
    { fullName: "Kent Beck", phone: 634987263, email: "kent.beck@example.com", entryDate: new Date(), sex: "Male" },
    { fullName: "Rebecca Wirfs", phone: 987234582, email: "rebecca.wirfs@example.com", entryDate: new Date(), sex: "Female" },
    { fullName: "Martin Fowler", phone: 987234582, email: "martin.fowler@example.com", entryDate: new Date(), sex: "Male" },
    { fullName: "Mary Poppendieck", phone: 166239845, email: "mary.poppendieck@example.com", entryDate: new Date(), sex: "Male" },
  ];

  constructor() { }

  getContacts() {
    return this.listContact.slice()
  }
}
