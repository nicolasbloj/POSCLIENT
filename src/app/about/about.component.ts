import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nab-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  name = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
      console.log(f.value);  // { first: '', last: '' }
      console.log(f.valid);  // false
    }

}
