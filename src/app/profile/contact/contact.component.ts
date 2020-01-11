import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;
  
  // public toastr: ToastrService

  

  ngOnInit() {
    this.contacForm();
    this.contactApi.GetContactList();
     }
     constructor(private contactApi: ContactService, public fb: FormBuilder){}

  contacForm() {
    this.contactForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(2)]],
      Subject: [''],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      message: ['']
    })
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.contactForm.controls[controlName].hasError(errorName);
  }
  resetForm() {
      this.contactForm.reset();
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.controls[key].setErrors(null)
      });
    }

  contactme() {
    this.contactApi.AddContact(this.contactForm.value);
    //this.toastr.success(this.contactForm.controls.Name.value + ' successfully added!');
    this.resetForm();

  }

}
