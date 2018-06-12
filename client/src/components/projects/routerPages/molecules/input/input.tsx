import * as React from 'react';
import './style.css';
import { TextFieldProps, InputProps, InputState } from './types';

function TextField (props: TextFieldProps) {
  return(
    <div>
      <input
        className="input"
        placeholder={props.placeholder}
        style={{
          height: '20px',
          width: '100%',
        }}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onToggleFocus}
        onBlur={props.onToggleFocus}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            props.onPressEnter();
          }
        }}
      />
    </div>
  );
}

class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      value: '',
      focus: false,
      enter: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onToggleFocus = this.onToggleFocus.bind(this);
    this.onPressEnter = this.onPressEnter.bind(this);
  }
  
  onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({value: e.target.value});
    this.props.onSave(e.target.value);
    console.log(this.state.value);
  }

  onToggleFocus() {
    this.setState({focus: !this.state.focus});
  }

  onPressEnter() {
    this.setState({enter: !this.state.enter});
  }

  public render(): JSX.Element {
    const { type, label, placeholder, error, errorMessage} = this.props;
    const { value, focus, enter} = this.state;
    return (
      <div>
        {type === 'search' ? 'icon' : ''}
        <p
          style={{
            fontSize: '13px',
            color: 'gray',
          }}
        >
          {label !== '' && label}
        </p>
        <TextField
          placeholder={placeholder}
          value={value}
          onChange={this.onChange}
          onToggleFocus={this.onToggleFocus}
          onPressEnter={this.onPressEnter}
          error={error}
        />
        <p
          style={{
            fontSize: '13px',
            color: 'red',
          }}
        >
          {error && errorMessage !== '' && errorMessage}
        </p>
        포커스: {focus ? <p style={{margin : 0, color: 'blue'}}>focus On</p> : <p style={{margin : 0, color: 'red'}}>focus OFF</p>}
        엔터키: {enter ? <p style={{margin : 0, color: 'blue'}}>Enter On</p> : <p style={{margin : 0, color: 'red'}}>enter OFF</p>}
      </div>
    );
  }
}

export default Input;
