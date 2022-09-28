import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-tchatroom',
  templateUrl: './page-list-tchatroom.component.html',
  styleUrls: ['./page-list-tchatroom.component.scss']
})
export class PageListTchatroomComponent implements OnInit {

  public TitleRoom: string = 'Rooms :';

  constructor() { }

  ngOnInit(): void {
  }

}
