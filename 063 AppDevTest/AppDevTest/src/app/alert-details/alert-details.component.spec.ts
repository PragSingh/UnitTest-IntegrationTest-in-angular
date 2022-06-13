import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/product';

import { AlertDetailsComponent } from './alert-details.component';

describe('AlertDetailsComponent', () => {
  let component: AlertDetailsComponent;
  let fixture: ComponentFixture<AlertDetailsComponent>;
  const stubProduct : Product =
  {
    id: 3,
    name: 'Devops',
    price: 699,
    quantity: 0,
    status: '4 left',
    description: "this course help us to understand automation testing",
    imgaddress : "https://rahulshettyacademy.com/rs_admin/public/images/courses/webservices-rest-api-testing-with-soapui_1591015296_soapui.jpg"
  };
  const stubProduct2 : Product =
  {
    id: 3,
    name: 'Devops',
    price: 710,
    quantity: 2,
    status: '4 left',
    description: "this course help us to understand automation testing",
    imgaddress : "https://rahulshettyacademy.com/rs_admin/public/images/courses/webservices-rest-api-testing-with-soapui_1591015296_soapui.jpg"
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDetailsComponent);
    component = fixture.componentInstance;
    component.product =stubProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
   const el :HTMLElement = fixture.nativeElement;
   const p= el.querySelector("p");
   expect(p.textContent).toEqual("Course is available for discount");


  });

  it('should create', () => {
    expect(component).toBeTruthy();
   const el :HTMLElement = fixture.nativeElement;
   const p= el.querySelector("p");
   expect(p.textContent).toEqual("Course is available for discount");


  });

  it('Verify Paragraph logic', () => {
    expect(component).toBeTruthy();
   const el :HTMLElement = fixture.nativeElement;
   const p= el.querySelectorAll("p")
   expect(p.length).toEqual(2);
   component.product =stubProduct2;
    fixture.detectChanges();
    const el2 :HTMLElement = fixture.nativeElement;
   const p2= el2.querySelectorAll("p")
    expect(p2.length).toEqual(0);

  });

  it('Verify Paragraph logic', () => {
    component.product =stubProduct;
    fixture.detectChanges();
    let selectedproduct :Product;
    component.notify.subscribe((product)=>selectedproduct = product);
    component.clickChildMe();
    expect(selectedproduct).toEqual(stubProduct);
    //expect(selectedproduct).toEqual(stubProduct2);


  });
});
