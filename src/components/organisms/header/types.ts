import { History } from 'history';

export interface HeaderProps {
  color: string; 
  width: number;
  height: number;
  history?: History;
}

export interface RoutePathTypes {
  pathName: string;
  icon: string;
}

export interface HeaderStates {
  routePath: Array<RoutePathTypes>;
}

export interface RouteButtonContainerProps {
  pathList: Array<RoutePathTypes>;
  currentPath: string;
  history?: History;
  onClick: (path: string) => void;
}
