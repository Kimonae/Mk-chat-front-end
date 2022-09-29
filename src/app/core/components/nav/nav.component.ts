import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TchatroomService } from 'src/app/tchatrooms/services/tchatroom.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public r!:any

  constructor(private tchatRoomService:TchatroomService,private router:Router) { }

  ngOnInit(): void {
  }

  
}
