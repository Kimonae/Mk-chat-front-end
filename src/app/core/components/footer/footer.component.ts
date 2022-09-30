import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/messages/services/messages.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  constructor(private messageService:MessagesService) {

  }

  ngOnInit(): void {
  }
  
  onAddMessage(obj: any) {
   this.messageService.add(obj).subscribe(data=>{
   })
    }

}
