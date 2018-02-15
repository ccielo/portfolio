import styled from 'styled-components';
import * as React from 'react';
import TabButton from '../../molecules/tabButton';
import { react, barcelona, seoul } from '../../../constants';
import { History } from 'history';
import { HeaderProps, RouteButtonContainerProps, HeaderStates } from './types';

const StyledHeader = styled.div`
  background-color: ${(props: HeaderProps) => props.color};
  width: ${(props: HeaderProps) => props.width};
  height: ${(props: HeaderProps) => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: 'pre';
`;

function RouteButtonContainer (props: RouteButtonContainerProps) {
  return(
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}
    >
      {props.pathList.map(path => {
        return(
          <div
            key={`${path.pathName}-key`}
            onClick={() => props.onClick(path.pathName)}
          >
            <TabButton
              id={path.pathName}
              src={path.icon}
              active={props.currentPath === `/${path.pathName}`}
            />
          </div>
          );
        })}
    </div>
  );
}

class Header extends React.Component<HeaderProps, HeaderStates> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      routePath: [
        {
          pathName: 'main',
          icon: react,
        },
        {
          pathName: 'calc',
          icon: barcelona,
        },
        {
          pathName: 'todo',
          icon: seoul,
        },
      ],
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

export default Header;