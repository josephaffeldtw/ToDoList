import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private _url = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this._url, todo);
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this._url);
  }

  edit(todo: Todo, id: string): Observable<Todo> {
    const url = `${ this._url }/${ id }`;
    return this.http.put<Todo>(url, todo);
  }

  remove(id: string): Observable<Todo> {
    const url = `${ this._url }/${ id }`;
    return this.http.delete<Todo>(url);
  }
}
