import * as React from 'react';
import Input from '../../../../molecules/input';
import Button from '../../../../atoms/button';
import styles from './styles';

export interface LoginProps {
  type: 'password' | 'id';
  autoSave: boolean;
  hasCheckBox: boolean;
  onSummit: () => void;
}

export interface InputValue {
  value: string;
  isVaild: boolean;
}

export interface LoginStates {
  checked: boolean;
  input: {
    id: InputValue;
    password: InputValue;
  };
}

const listData = [
  {
    title: '필수기능',
    key: 'todo01',
    context: [
      {
        value: '비밀번호일때 security type',
        key: 'context001',
        isFinished: true,
      },
      {
        value: '아이디 대문자든 소문자든 소문자로 저장되게 하기',
        key: 'context002',
        isFinished: true,
      },
      {
        value: '미입력시 에러 발생',
        key: 'context003',
        isFinished: false,
      },
    ],
  },
  {
    title: '선택기능',
    key: 'todo02',
    context: [
      {
        value: '비밀번호일때 security on / off',
        key: 'context001',
        isFinished: true,
      },
      {
        value: '아이디 와 비밀번호를 입력 후에 자동으로 로그인',
        key: 'context002',
        isFinished: false,
      },
      {
        value: '아이디 와 비밀번호를 입력 후 버튼을 눌렀을때 로그인',
        key: 'context003',
        isFinished: false,
      },
      {
        value: '미입력시 에러 메세지 표시',
        key: 'context004',
        isFinished: false,
      },
      {
        value: '포커스-아웃 일때 글자가 쓰이지 않앗을때 에러메세지 표시',
        key: 'context004',
        isFinished: false,
      },
    ],
  },
];

function TodoList () {
  return(
    <div>
      {listData.map(todo =>
        <div key={todo.key}>
          <p>{todo.title}</p>
          <ol>
            {todo.context.map((context) =>
            <li key={context.key}>
              {context.isFinished ?
                <p style={{margin: 0, textDecorationLine: 'line-through'}}>{context.value}</p> :
                <p style={{margin: 0}}>{context.value}</p>
              }
            </li>
            )}
          </ol>
        </div>
      )}
    </div>
  );
}
class Login extends React.Component<LoginProps, LoginStates> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      checked: false,
      input: {
        id: {
          value: '',
          isVaild: false,
        },
        password: {
          value: '',
          isVaild: false,
        },
      },
    };
    this.toggleCheck = this.toggleCheck.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.onSummit = this.onSummit.bind(this);
  }

  handleInputValue(key: string, value: string) {
    let input = Object.assign({}, this.state.input);
    input[ key ] = { 'value': value };
    this.setState({input});
  }

  toggleCheck() {
    this.setState({checked: !this.state.checked});
  }

  onSummit() {
    // this.props.onSummit();
    var id = this.state.input.id.value.toLowerCase();
    var password = this.state.input.password.value;
    alert(`id: ${id} password: ${password} `);
  }

  render() {
    return (
        <div style={styles.login}>
          <ol>
            <li>회원가입(form) - 아이디일때 특수문자를 사용 못하게</li>
            <li>회원가입(form) -  비밀번호의 암호성 검사</li>
          </ol>
          <TodoList />
          <div style={styles.outerContainer}>
            <div style={styles.innerContainer}>
              <Input
                type="input"
                label="id"
                placeholder="id"
                onSave={(value) => this.handleInputValue('id', value)}
              />
              <div style={styles.passwordInput}>
                <Input
                  type="input"
                  label="password"
                  placeholder="password"
                  security={this.state.checked}
                  onSave={(value) => this.handleInputValue('password', value)}
                />
                {!this.props.hasCheckBox && <input type="checkbox" onClick={this.toggleCheck} />}
              </div>
              <Button color="skyblue" onClick={this.onSummit} label="login" />
            </div>
          </div>
        </div>
    );
  }
}

export default Login;
