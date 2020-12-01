import { createAction, props } from '@ngrx/store';
import { Todo } from '../todo';

export const loadListTodo = createAction(
  '[TODO] - load List',
);

export const todoListSuccess = createAction(
  '[API] - do List Success',
  props<{ list: Todo[] }>(),
);

export const todoListFailure = createAction(
  '[API] - do List Success',
);
