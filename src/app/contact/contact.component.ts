import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nab-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  
  //byEmail:boolean= true;
  emailContact:String=" **** E-MAIL **** ";
  socialContact:String=" **** SOCIAL **** ";
  
  constructor() { }

  ngOnInit() {
  }

}
