import { ReactNode } from 'react';

export interface ViewProperties {
  isRow?: boolean;
  children: ReactNode;
  vertical?: 'center' | 'flex-start' | 'flex-end';
  horizontal?: 'center' | 'flex-start' | 'flex-end' |'space-between'| 'space-around';
  styles?: React.CSSProperties;
}