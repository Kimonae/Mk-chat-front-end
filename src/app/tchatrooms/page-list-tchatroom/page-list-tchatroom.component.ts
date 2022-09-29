import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tchatroom } from 'src/app/core/models/tchatroom';
import { TchatroomService } from '../services/tchatroom.service';

@Component({
  selector: 'app-page-list-tchatroom',
  templateUrl: './page-list-tchatroom.component.html',
  styleUrls: ['./page-list-tchatroom.component.scss']
})
export class PageListTchatroomComponent implements OnInit {

  public TitleRoom: string = 'Rooms :';
  public Rooms$ !: Observable<Tchatroom[]>;

  constructor (private tchatroomService: TchatroomService,
    private router: Router) {

      this.Rooms$ = this.tchatroomService.collection;


    }

  ngOnInit(): void {
  }

}
