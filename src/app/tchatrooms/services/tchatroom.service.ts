import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Tchatroom } from 'src/app/core/models/tchatroom';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TchatroomService {
  public urlApi = environment.urlApi;
  private collection$!: Observable<Tchatroom[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http
      .get<Tchatroom[]>(`${this.urlApi}/tchatroom/allrooms`)
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

  update(obj: Tchatroom) {


    return this.http.put(`${this.urlApi}/tchatroom/${obj.id}`, obj)
  }

  add(item : Tchatroom): Observable<Tchatroom> {

    return this.http.post<Tchatroom>(`${this.urlApi}/tchatroom`, item);
  }

  getItemById(id: number): Observable<Tchatroom>{
   return this.http.get<Tchatroom>(`${this.urlApi}/tchatroom/${id}`);
  }
}
