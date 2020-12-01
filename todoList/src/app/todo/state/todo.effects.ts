import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromAppActions from './todo.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from '../todo.service';
import { of } from 'rxjs';
import { Todo } from '../todo';

@Injectable()
export class AppEffects {

  todoList$ = createEffect(() => this.action$
    .pipe(
      ofType(fromAppActions.loadListTodo),
      mergeMap(() => this.todoService.getAll()
        .pipe(
          map((list: Todo[]) => fromAppActions.todoListSuccess({ list })),
          catchError(() => of(fromAppActions.todoListFailure())),
        ),
      ),
    ),
  );

  constructor(private action$: Actions,
              private todoService: TodoService) {
  }
}
