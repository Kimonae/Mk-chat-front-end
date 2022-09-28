import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListTchatroomComponent } from './page-list-tchatroom.component';

describe('PageListTchatroomComponent', () => {
  let component: PageListTchatroomComponent;
  let fixture: ComponentFixture<PageListTchatroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListTchatroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListTchatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
