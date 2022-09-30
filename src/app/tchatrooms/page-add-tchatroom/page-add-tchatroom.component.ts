import { Component, OnInit } from '@angular/core';
import { Tchatroom } from 'src/app/core/models/tchatroom';
import { TchatroomService } from '../services/tchatroom.service';
import { Router } from '@angular/router';
import { Time } from '@angular/common';

@Component({
  selector: 'app-page-add-tchatroom',
  templateUrl: './page-add-tchatroom.component.html',
  styleUrls: ['./page-add-tchatroom.component.scss']
})
export class PageAddTchatroomComponent implements OnInit {


  constructor(

    private tchatroomService : TchatroomService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  Addtchat(obj: any) {
    this.tchatroomService.add(obj).subscribe(data=>{
   this.router.navigate(['canal']); //mettre id de la room créee pour redirection ?

    })


}

}
