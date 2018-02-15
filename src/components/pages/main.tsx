import * as React from 'react';
import Header from '../organisms/header';
import { History } from 'history';

export interface MainProps {
  history: History;
}

class Main extends React.Component<MainProps> {
  render() {
    return (
        <div>
          <Header
            color="grey"
            height={120}
            width={window.innerHeight}
            history={this.props.history}
          />
          <p>main page</p>
        </div>
    );
  }
}

export default Main;
