import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AboutComponent]
    })
      .compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);

    component = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;

  });

  /*it('should be created', () => {
    expect(component).toBeTruthy();
  });*/

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    console.log(el.textContent);
    console.log(component.title);
    expect(el.textContent).toContain(component.title);
    expect(el.textContent).toEqual(component.title);
  });
  // textContent. cuidado con saltos de linea en tags html

  it('should display a different test title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });


});
