import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDocumentComponent } from './sale-document.component';

describe('SaleDocumentComponent', () => {
  let component: SaleDocumentComponent;
  let fixture: ComponentFixture<SaleDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
