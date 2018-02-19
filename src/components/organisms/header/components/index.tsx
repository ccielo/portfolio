import styled from 'styled-components';
import * as React from 'react';
import { HeaderProps, RouteButtonContainerProps } from '../types';
import TabButton from '../../../molecules/tabButton';

export const StyledHeader = styled.div`
  background-color: ${(props: HeaderProps) => props.color};
  width: ${(props: HeaderProps) => props.width};
  height: ${(props: HeaderProps) => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: 'pre';
`;

export function RouteButtonContainer (props: RouteButtonContainerProps) {
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