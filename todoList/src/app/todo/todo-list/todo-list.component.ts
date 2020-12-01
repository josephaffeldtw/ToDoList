import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { AppState } from '../state/todo.reducer';
import { select, Store } from '@ngrx/store';
import * as fromAppAction from '../state/todo.actions';
import * as fromAppSelect from '../state/todo.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  list$: Observable<Todo[]>;

  constructor(private todoService: TodoService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(fromAppAction.loadListTodo());
    this.list$ = this.store.pipe(select(fromAppSelect.selectListTodo));
  }

}
