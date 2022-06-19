import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormCategoryComponent } from './reactive-form-category.component';

describe('ReactiveFormCategoryComponent', () => {
  let component: ReactiveFormCategoryComponent;
  let fixture: ComponentFixture<ReactiveFormCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
