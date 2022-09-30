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
  constructor(private tchatroomService:TchatroomService,private router:Router) {
    this.collection$=this.tchatroomService.collection
  }
  ngOnInit(): void {
  }
  onRoom(item:any){
    this.tchatroomService.roomCanal.next(item.id);
    this.router.navigate(['canal',item.id])

    }

    public onDelet(item:Tchatroom){
      let v=confirm("Etes vous sur ?");
      if(v==true && item.id != 2)
      this.tchatroomService.deletRoom(item.id).subscribe(data=>{

          })


    }

}
