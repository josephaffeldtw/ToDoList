import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './todo.reducer';

export const selectTodoContext = createFeatureSelector('todoContext');

export const selectListTodo = createSelector(
  selectTodoContext,
  (state: AppState) => state.listTodo,
);


