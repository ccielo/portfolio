import { combineReducers } from 'redux';
import auth, { AuthState } from './auth';

export default combineReducers({
  auth,
});

// 스토어의 상태 타입 정의
export interface StoreState {
  auth: AuthState;
}