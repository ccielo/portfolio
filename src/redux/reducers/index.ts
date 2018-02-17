import { Reducer, combineReducers } from 'redux';
import calculateReducer, { CalculateTypes } from './calculate';

export interface RootState {
  calculator: CalculateTypes;
}

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  calculator: calculateReducer,
});