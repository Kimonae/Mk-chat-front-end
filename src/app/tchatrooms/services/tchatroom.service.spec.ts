import { TestBed } from '@angular/core/testing';

import { TchatroomService } from './tchatroom.service';

describe('TchatroomService', () => {
  let service: TchatroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TchatroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
