import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tchatroom } from 'src/app/core/models/tchatroom';

@Component({
  selector: 'app-form-tchatrooms',
  templateUrl: './form-tchatrooms.component.html',
  styleUrls: ['./form-tchatrooms.component.scss']
})
export class FormTchatroomsComponent implements OnInit {

  @Output() enter = new EventEmitter<Tchatroom>()
  @Input() tchat!: Tchatroom;
  public error!: string;
  public form!: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({

      id : [this.tchat.id],
      name: [this.tchat.name, Validators.required],
      CreationDate: [this.tchat.CreationDate],


    })
  }

  public onSubmit() {


    if(this.form.status === "VALID") {
      this.enter.emit(this.form.value);

      }else {

    alert( "Attention un nom est requis")
    this.error = 'Merci de renseigner un nom'
      }
  }

  }



