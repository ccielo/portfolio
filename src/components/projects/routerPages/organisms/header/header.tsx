import * as React from 'react';
import { History } from 'history';
import { HeaderProps, HeaderStates } from './types';
import { StyledHeader, RouteButtonContainer } from './components';
import { routePathList } from '../../../../../constants/';

class Header extends React.Component<HeaderProps, HeaderStates> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      routePath: routePathList,
    };
    this.onPush = this.onPush.bind(this);
  }

  onPush(path: string) {
    const history = this.props.history as History;
    history.push(`/${path}`);
  }

  render() {
    const history = this.props.history as History;
    return (
      <StyledHeader {...this.props}>
        <RouteButtonContainer
          pathList={this.state.routePath}
          currentPath={history.location.pathname}
          history={history}
          onClick={this.onPush}
        />
      </StyledHeader>
    );
  }
}

StyledHeader.displayName = 'StyledHeader';
export default Header;