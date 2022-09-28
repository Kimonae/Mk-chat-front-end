import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TchatroomService } from '../services/tchatroom.service';

@Component({
  selector: 'app-page-list-tchatroom',
  templateUrl: './page-list-tchatroom.component.html',
  styleUrls: ['./page-list-tchatroom.component.scss']
})
export class PageListTchatroomComponent implements OnInit {

  public TitleRoom: string = 'Rooms :';

  constructor (private tchatroomService: TchatroomService,
    private router: Router) {

    }

  ngOnInit(): void {
  }

}
