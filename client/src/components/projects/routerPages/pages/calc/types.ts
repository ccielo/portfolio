import { History } from 'history';

export interface CalcProps {
  history: History;
}

export interface CalcStates {
  numberPad: Array<Number>;
  value: object;
  isFirst: boolean;
  result: string;
  symbol: string;
}

export interface NumberPadProps {
  pad: number;
  size: number;
  onClick: (value: number) => void;
}

export interface PadContainerProps {
  color: string;
  isZero: boolean;
  size: number;
  label?: string;
}

export interface PadSectionProps extends PadContainerProps {
  onClick: () => void;
  label: string;
}

export interface AnswerSectionProps {
  result: string;
}

export interface NumberPadSectionProps {
  onDecimal: () => void;
  numberPad: Array<object>;
  onChange: (value: number) => void;
}