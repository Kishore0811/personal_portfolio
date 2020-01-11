import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  contactsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  AddContact(contact: Contact) {
    this.contactsRef.push({
      Name: contact.Name,
      Subject: contact.Subject,
      email: contact.email,
      message: contact.message
    })
    .catch(error => {
      this.errorMgmt(error);
    })
}
GetContactList() {
  
  this.contactsRef = this.db.list('contact-list');
  return this.contactsRef;
}
private errorMgmt(error) {
  console.log(error)
}
}
