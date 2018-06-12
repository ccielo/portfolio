import { createAction, handleActions, Action } from 'redux-actions';

const SIGNIN = 'auth/SIGNIN';

type SignInPayload = {
  id?: string,
  password?: string,
};

export const actionCreators = {
  signIn: createAction<SignInPayload>(SIGNIN)
};

export interface AuthState {
  user: {
    id: string,
    password: string,
  };
}

const initialState: AuthState = {
  user: {
    id: '',
    password: '',
  }
};

export default handleActions<AuthState, any>(
  {
    [SIGNIN]: (state, action: Action<SignInPayload>): AuthState => {
      console.log('asd', state.user, action, action.payload);
      return {
        ...state,
        user: action.payload
      } as AuthState;
    },
  }, 
  initialState
);