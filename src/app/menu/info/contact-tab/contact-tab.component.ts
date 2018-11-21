import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from '../../../../model/contact.model';
import { DataRetrieval } from '../../../http/data-retrieval.service';

@Component({
  selector: 'app-contact-tab',
  templateUrl: './contact-tab.component.html',
  styleUrls: ['./contact-tab.component.css']
})
export class ContactTabComponent implements OnInit {

  form: FormGroup;
  constructor(private dataStorage: DataRetrieval) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.maxLength(1500)])
    });
  }

  onSubmit() {
    const contact: Contact = {
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      description: this.form.get('message').value,
    };
    this.dataStorage.saveContact(contact);
  }

}
