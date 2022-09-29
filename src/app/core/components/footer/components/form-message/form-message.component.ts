
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent implements OnInit {


@Output() submitted =new EventEmitter();
public form!:FormGroup;



  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      id:[0],
      idRoom:[1],
      textarea:["message teste",Validators.required]

    })
  }

  onSubmit() {
  this.submitted.emit(this.form.value)
    }

}
