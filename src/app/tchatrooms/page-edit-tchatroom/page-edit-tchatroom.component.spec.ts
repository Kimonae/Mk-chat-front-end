import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditTchatroomComponent } from './page-edit-tchatroom.component';

describe('PageEditTchatroomComponent', () => {
  let component: PageEditTchatroomComponent;
  let fixture: ComponentFixture<PageEditTchatroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditTchatroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditTchatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
