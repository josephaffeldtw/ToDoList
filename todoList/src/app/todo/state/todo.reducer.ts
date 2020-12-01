import { Action, createReducer, on } from '@ngrx/store';

import { Todo } from '../todo';
import * as fromAppActions from './todo.actions';

export interface AppState {
  listTodo: Todo[];
}

export const initialState: AppState = {
  listTodo: [],
};

const appStateReducer = createReducer(
  initialState,
  on(fromAppActions.todoListSuccess, (state, { list }) => ({
    ...state,
    listTodo: list,
  })),
);

export function reducer(state: AppState | undefined, action: Action): AppState {
  return appStateReducer(state, action);
}
