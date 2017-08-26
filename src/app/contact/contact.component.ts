import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'nab-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit, OnDestroy {

  // byEmail:boolean= true;
  emailContact = ' **** E-MAIL **** ';
  socialContact = ' **** SOCIAL **** ';

  constructor() {
    console.log('ContactComponent');
  }


  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    console.log('OnInit');
  }


  ngOnDestroy() {
    console.log('OnDestroy');
  }
}
