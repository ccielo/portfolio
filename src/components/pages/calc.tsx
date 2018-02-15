import * as React from 'react';
import Header from '../organisms/header';
import { History } from 'history';

export interface CalcProps {
  history: History;
}

class Calc extends React.Component<CalcProps> {
  render() {
    return (
        <div>
          <Header
            color="grey"
            height={120}
            width={window.innerHeight}
            history={this.props.history}
          />
          <p>Calc page</p>
        </div>
    );
  }
}

export default Calc;
