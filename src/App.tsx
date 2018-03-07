import * as React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Main from '../src/components/projects/routerPages/pages/main/';
import Calc from '../src/components/projects/routerPages/pages/calc';
import Todo from '../src/components/projects/routerPages/pages/todo';
import SNS from '../src/components/projects/socialMedia/components/pages/main';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path={'/'} component={Main}/>
        <Route exact={true} path={'/main'} component={Main}/>
        <Route exact={true} path={'/calc'} component={Calc}/>
        <Route exact={true} path={'/todo'} component={Todo}/>
        <Route exact={true} path={'/sns'} component={SNS} />
      </Switch>
    );
  }
}

export default App;
