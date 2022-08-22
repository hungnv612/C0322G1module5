import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly API_URL = 'http://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {
  }

  getTodos(count = 10): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL).pipe(
      map(data => data.filter((todo, i) => i < count))
    );
  }
}
