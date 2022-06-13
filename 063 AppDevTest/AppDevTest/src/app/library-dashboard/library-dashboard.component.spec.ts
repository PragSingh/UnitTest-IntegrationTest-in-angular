import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LibraryService } from '../library.service';

import { LibraryDashboardComponent } from './library-dashboard.component';

describe('LibraryDashboardComponent', () => {
  let component: LibraryDashboardComponent;
  let fixture: ComponentFixture<LibraryDashboardComponent>;
  let getBookDetailsSpy;
  let book : any= [ {
    "book_name": "RestAssured12",
    "isbn": "gdfdg12",
    "aisle": "3231"
},{
  "book_name": "RestAssured12",
  "isbn": "gdfdg12",
  "aisle": "3231"
}];

  beforeEach(async () => {
    const libraryService =jasmine.createSpyObj('LibraryService',['getBookDetails']);
    getBookDetailsSpy= libraryService.getBookDetails.and.returnValue(of(book));

    await TestBed.configureTestingModule({
      declarations: [ LibraryDashboardComponent ],
      providers : [{provide:LibraryService,useValue: libraryService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryDashboardComponent);
    TestBed.inject(LibraryService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const el :HTMLElement =fixture.nativeElement;
    expect(el.querySelectorAll("tr").length).toBe(3);
    expect(getBookDetailsSpy.calls.any()).toBe(true);









  });
});
