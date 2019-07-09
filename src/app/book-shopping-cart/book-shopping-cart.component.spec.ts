import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShoppingCartComponent } from './book-shopping-cart.component';

describe('BookShoppingCartComponent', () => {
  let component: BookShoppingCartComponent;
  let fixture: ComponentFixture<BookShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
