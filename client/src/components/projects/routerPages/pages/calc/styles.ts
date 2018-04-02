import styled from 'styled-components';
import { PadContainerProps } from './types';

export const styles = {
  wrapGrid: {
    display: 'flex',
    flexFlow: `row-reverse wrap-reverse`,
    width: 150,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  calculateResult: {
    width: 150,
    height: 50,
    background: `linear-gradient(to right, black , grey)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  resultText: {
    fontSize: 20,
    color: 'white',
  },
} as React.CSSProperties;

export const PadContainer = styled.div`
  width: ${(p: PadContainerProps) => p.isZero ? p.size * 2 : p.size}px;
  height: ${(p: PadContainerProps) => p.size}px;
  background-color: ${(p: PadContainerProps) => p.color};
  font-size: 25;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1;
  border-color: black;
  cursor: default;
`;
