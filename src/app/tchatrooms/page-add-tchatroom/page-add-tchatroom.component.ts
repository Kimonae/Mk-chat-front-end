import { Component, OnInit } from '@angular/core';
import { Tchatroom } from 'src/app/core/models/tchatroom';
import { TchatroomService } from '../services/tchatroom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-tchatroom',
  templateUrl: './page-add-tchatroom.component.html',
  styleUrls: ['./page-add-tchatroom.component.scss']
})
export class PageAddTchatroomComponent implements OnInit {

  public chat = new Tchatroom();
  constructor(

    private tRService : TchatroomService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  Addtchat(obj: Tchatroom) {

    this.tRService.add(obj).subscribe(()=>{

      this.router.navigate(['tchatroom']); //mettre id de la room créee pour redirection ?

    })

}

}
