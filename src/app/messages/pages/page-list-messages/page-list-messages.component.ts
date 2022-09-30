import { Component, OnInit } from '@angular/core';
import { TchatroomService } from 'src/app/tchatrooms/services/tchatroom.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss']
})
export class PageListMessagesComponent implements OnInit {
  canal!:any
  room:any

  constructor(private tchatRoomService:TchatroomService) {

 //recupérer IdRoom
    this.tchatRoomService.roomCanal.subscribe((data)=>{

 //recupérer Nomde la room
      this.tchatRoomService.getItemById(data).subscribe(rooms=>{
      this.room=rooms
     })
      this.tchatRoomService.getMessageByRoom(data).subscribe((canal)=>{
        this.canal = canal;
      })
    })
  }
  ngOnInit(): void {
  }
}
