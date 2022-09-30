
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/messages/services/messages.service';
import { TchatroomService } from 'src/app/tchatrooms/services/tchatroom.service';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent implements OnInit {

id!:number

@Output() submit =new EventEmitter();
public form!:FormGroup;

submitted=false;

  constructor(private router:Router,private fb:FormBuilder,private tchatRoomService:TchatroomService,private messageService:MessagesService) {
    this.tchatRoomService.roomCanal.subscribe(data=>{

      this.id=data;

       })

  }

  ngOnInit(): void {
    this.form=this.fb.group({
      id:[],
      idRoom:[this.id],
      text:["",Validators.required]

    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
  this.submitted=true;
    if(this.form.invalid){

    } else{

    const obj= this.form.value
    obj.idRoom = this.id
    this.submit.emit(obj)

        }

  }
  



}
