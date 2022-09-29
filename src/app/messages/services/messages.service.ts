
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Message } from 'src/app/core/models/message';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  //urlApi
  private urlApi = environment.urlApi;

  private collection$ !: Observable<Message[]>;

  constructor(private http: HttpClient) {
    this.http.get<Message[]>(`${this.urlApi}/message/allmessages`);
  }

  

}

