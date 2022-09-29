import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from 'src/app/core/models/message';
import { TchatroomService } from 'src/app/tchatrooms/services/tchatroom.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss']
})
export class PageListMessagesComponent implements OnInit {
  canal!:any
  room!:any
  id!:number




  constructor(private tchatRoomService:TchatroomService,private router:Router) {

    this.tchatRoomService.roomCanal.subscribe((data)=>{
      console.log(data);
       this.room=data[0]
      this.tchatRoomService.getMessageByRoom(data).subscribe((canal)=>{
        this.canal = canal;

        console.log(canal);





      })


    })




  }

  ngOnInit(): void {
  }



}
