import * as React from 'react';
import { MainProps, MainStates } from './types';
import Input from '../../molecules/input';

class Main extends React.Component<MainProps, MainStates> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      textValue: '',
      focus: false,
      error: false,
    };
    this.onSave = this.onSave.bind(this);
  }

  onSave(text: string) {
    this.setState({textValue: text});
  }

  render() {
    return (
        <div>
          main
          <Input
            type="search"
            label="라벨"
            placeholder="placeholder"
            onSave={this.onSave}
            error={true}
            errorMessage="error message"
          />
          상위 컴포넌트 결과값: {this.state.textValue}
        </div>
    );
  }
}

export default Main;
