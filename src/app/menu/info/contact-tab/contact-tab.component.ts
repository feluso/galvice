import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() confirmSave = new EventEmitter<any>();
  constructor(private dataStorage: DataRetrieval) { }

  ngOnInit() {
    this.form = new FormGroup({
      message: new FormControl('', [Validators.required, Validators.maxLength(1500)])
    });
  }

  onSubmit() {
    const contact: Contact = {
      description: this.form.get('message').value,
    };
    this.dataStorage.saveContact(contact);
    this.confirmSave.emit();
  }

}
