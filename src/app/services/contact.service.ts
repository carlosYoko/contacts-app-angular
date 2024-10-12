import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  listContact: Contact[] = [
    { id: 1, fullName: "Kent Beck", phone: 634987263, email: "kent.beck@example.com", entryDate: new Date(), sex: "Male" },
    { id: 2, fullName: "Rebecca Wirfs", phone: 987234582, email: "rebecca.wirfs@example.com", entryDate: new Date(), sex: "Female" },
    { id: 3, fullName: "Martin Fowler", phone: 987234582, email: "martin.fowler@example.com", entryDate: new Date(), sex: "Male" },
    { id: 4, fullName: "Mary Poppendieck", phone: 166239845, email: "mary.poppendieck@example.com", entryDate: new Date(), sex: "Female" },
    { id: 5, fullName: "Ward Cunningham", phone: 765234987, email: "ward.cunningham@example.com", entryDate: new Date(), sex: "Male" },
    { id: 6, fullName: "Linda Rising", phone: 982345123, email: "linda.rising@example.com", entryDate: new Date(), sex: "Female" },
    { id: 7, fullName: "Eric Evans", phone: 743921876, email: "eric.evans@example.com", entryDate: new Date(), sex: "Male" },
    { id: 8, fullName: "Grady Booch", phone: 345789123, email: "grady.booch@example.com", entryDate: new Date(), sex: "Male" },
    { id: 9, fullName: "Esther Derby", phone: 789234561, email: "esther.derby@example.com", entryDate: new Date(), sex: "Female" },
    { id: 10, fullName: "Elisabeth Hendrickson", phone: 123456789, email: "elisabeth.hendrickson@example.com", entryDate: new Date(), sex: "Female" }
  ];

  constructor() { }

  getContacts() {
    return this.listContact.slice()
  }

  deleteContactById(i: number) {
    this.listContact.splice(i, 1)
  }
}
