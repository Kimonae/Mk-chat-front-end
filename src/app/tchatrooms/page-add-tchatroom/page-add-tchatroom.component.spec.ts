import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddTchatroomComponent } from './page-add-tchatroom.component';

describe('PageAddTchatroomComponent', () => {
  let component: PageAddTchatroomComponent;
  let fixture: ComponentFixture<PageAddTchatroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddTchatroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddTchatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
