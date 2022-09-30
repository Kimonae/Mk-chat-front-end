import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-tchatrooms',
  templateUrl: './form-tchatrooms.component.html',
  styleUrls: ['./form-tchatrooms.component.scss']
})
export class FormTchatroomsComponent implements OnInit {

  @Output() enter = new EventEmitter();
  //@Input() tchat!: Tchatroom;
  public error!: string;
  public form!: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      id : [],
      name: ["", Validators.required],
      CreationDate: [],


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



