import * as React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Main from '../src/components/projects/routerPages/pages/main/';
import Calc from '../src/components/projects/routerPages/pages/calc';
import Todo from '../src/components/projects/routerPages/pages/todo';
import SNS from '../src/components/projects/socialMedia/components/pages/main';
import Login from '../src/components/projects/socialMedia/components/pages/login';
import UpdateNote from './components/projects/routerPages/pages/updateNote';
import LoginComponent from './components/projects/routerPages/pages/componentType/input/login';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path={'/'} component={Main} />
        <Route exact={true} path={'/component/input/01'} component={LoginComponent} />
        <Route exact={true} path={'/log'} component={UpdateNote} />
        <Route exact={true} path={'/calc'} component={Calc} />
        <Route exact={true} path={'/todo'} component={Todo} />
        <Route exact={true} path={'/sns'} component={SNS} />
        <Route exact={true} path={'/login'} component={Login} />
      </Switch>
    );
  }
}

export default App;
