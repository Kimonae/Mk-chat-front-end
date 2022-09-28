import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTchatroomsComponent } from './form-tchatrooms.component';

describe('FormTchatroomsComponent', () => {
  let component: FormTchatroomsComponent;
  let fixture: ComponentFixture<FormTchatroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTchatroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTchatroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
