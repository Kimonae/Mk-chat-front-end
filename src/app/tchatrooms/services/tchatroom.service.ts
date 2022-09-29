import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Message } from 'src/app/core/models/message';
import { Tchatroom } from 'src/app/core/models/tchatroom';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TchatroomService {
  urlApi = environment.urlApi;
    collection$!: Observable<Tchatroom[]>;

//observable
  public  roomCanal: BehaviorSubject<any> = new BehaviorSubject<any>(0);

  private updatedB: BehaviorSubject<[]> = new BehaviorSubject<[]>([]);
  constructor(private http: HttpClient) {
    this.collection = this.http
      .get<Tchatroom[]>(`${this.urlApi}/chatroom/allrooms` )
     .pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Tchatroom(obj);
          });
        })
      );
  }

  get collection(): Observable<Tchatroom[]> {

    return this.collection$;
  }

  set collection(col : Observable<Tchatroom[]>) {

    this.collection$ = col;

  }

  update(obj: Tchatroom):Observable<Tchatroom> {


    return this.http.put<Tchatroom>(`${this.urlApi}/chatroom/${obj.id}`, obj)
  }

  add(item : Tchatroom): Observable<Tchatroom> {

    return this.http.post<Tchatroom>(`${this.urlApi}/chatroom`, item);
  }

  getItemById(id: number): Observable<Tchatroom>{
   return this.http.get<Tchatroom>(`${this.urlApi}/chatroom/${id}`);
  }


  getMessageByRoom(id: number):Observable<Message[]>{
    return this.http.get<Message[]>(`${this.urlApi}/chatroom/allrooms/${id}`);
   }

}
