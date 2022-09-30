
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
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

    
    this.collection = this.http
      .get<Message[]>(`${this.urlApi}/api/message/allmessages` )
     .pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Message(obj);
          });
        })
      );
  }

  get collection(): Observable<Message[]> {

    return this.collection$;
  }

  set collection(col : Observable<Message[]>) {

    this.collection$ = col;

  }

  update(obj: Message):Observable<Message> {


    return this.http.put<Message>(`${this.urlApi}/api/message/allmessages/${obj.id}`, obj)
  }

  add(item : Message): Observable<Message> {

    return this.http.post<Message>(`${this.urlApi}/api/message/allmessages`, item);
  }

  getMessageById(id: number): Observable<Message>{
   return this.http.get<Message>(`${this.urlApi}/api/message/${id}`);
  }

  getAllMessage():Observable<Message[]>{

    return this.http.get<Message[]>(`${this.urlApi}/api/message/allmessages`);
   }

}

