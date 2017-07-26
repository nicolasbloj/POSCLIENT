import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nab-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  // byEmail:boolean= true;
  emailContact = ' **** E-MAIL **** ';
  socialContact = ' **** SOCIAL **** ';

  constructor() { }

  ngOnInit() {
  }

}
