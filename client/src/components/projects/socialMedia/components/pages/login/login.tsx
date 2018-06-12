import * as React from 'react';
import FormSection from './components/form';
import Header from '../../organisms/header';
import './styles.css';

import { connect } from 'react-redux';
import { StoreState } from '../../../../../../redux/modules';
import { actionCreators as authActions } from '../../../../../../redux/modules/auth';
import { bindActionCreators } from 'redux';

interface LoginProps {
  user: {
    id: string,
    password: string,
  };
  AuthActions: typeof authActions;
}

interface LoginState {
  user: {
    id: string,
    password: string,
  };
  errorMessage: string;
}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      user: {
        id: '',
        password: '',
      },
      errorMessage: '에러입니다',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSumbit = this.onSumbit.bind(this);
  }
  
  handleChange(event: React.FormEvent<HTMLInputElement>, target: string) {
    let newState = Object.assign({}, this.state.user);
    newState[target] = event.currentTarget.value;
    this.setState({user: newState});
  }

  onSumbit() {
    this.props.AuthActions.signIn(this.state.user);
    console.log('api call');
    alert(`stop ${this.props.user.id}`);
  }

  public render(): JSX.Element {
    console.log('hi', this.props.user.id);
    return (
    <div>
      <Header errorMessage={this.state.errorMessage} />
      <div className="main-container">
        <div className="form-container">
          환영합니다!
          <FormSection
            handleChange={this.handleChange}
            onSumbit={this.onSumbit}
          />
        </div>
      </div>
    </div>
  );
  }
}

export default connect(
  ({ auth }: StoreState) => ({
    user: auth.user,
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch),
  })
)(Login);