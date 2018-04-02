import { Reducer, combineReducers } from 'redux';
import todoReducer, { TodoListTypes } from './todoList';

export interface RootState {
  todoList: TodoListTypes;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  todoList: todoReducer,
});

export default rootReducer;