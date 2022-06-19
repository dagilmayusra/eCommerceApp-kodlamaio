import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormProductComponent } from './reactive-form-product.component';

describe('ReactiveFormProductComponent', () => {
  let component: ReactiveFormProductComponent;
  let fixture: ComponentFixture<ReactiveFormProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
