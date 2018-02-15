import * as React from 'react';
import Header from '../organisms/header';
import { History } from 'history';

export interface TodoProps {
  history: History;
}

class Todo extends React.Component<TodoProps> {
  render() {
    return (
        <div>
          <Header
            color="grey"
            height={120}
            width={window.innerHeight}
            history={this.props.history}
          />
          <p>Todo page</p>
        </div>
    );
  }
}

export default Todo;
