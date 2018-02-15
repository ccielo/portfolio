import * as React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Main from '../src/components/pages/main';
import Calc from '../src/components/pages/calc';
import Todo from '../src/components/pages/todo';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path={'/'} component={Main}/>
        <Route exact={true} path={'/main'} component={Main}/>
        <Route exact={true} path={'/todo'} component={Calc}/>
        <Route exact={true} path={'/calc'} component={Todo}/>
      </Switch>
    );
  }
}

export default App;
