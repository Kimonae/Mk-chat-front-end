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

  public collection$: Observable<Tchatroom[]>;


  public TitleRoom: string = 'Rooms :';

  constructor(private tchatroomService:TchatroomService,private router:Router) {

    this.collection$=this.tchatroomService.collection

    console.log(this.collection$)

  }

  ngOnInit(): void {
  }

  onRoom(item:any){
    console.log(item)
    this.tchatroomService.roomCanal.next(item.id);
   this.router.navigate(['canal',item.id])
    }

}
