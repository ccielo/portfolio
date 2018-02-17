import * as React from 'react';
import { NumberPadProps, AnswerSectionProps, NumberPadSectionProps, PadSectionProps } from '../types';
import { styles, PadContainer } from '../styles';

export function NumberPad(props: NumberPadProps) {
  const { pad, size } = props;
  return(
    <PadContainer
      color="grey"
      isZero={pad === 0}
      size={size}
      onClick={() => props.onClick(pad)}
    >
      {pad}
    </PadContainer>
  );
}

export function NumberPadSection(props: NumberPadSectionProps) {
  return (
    <div
      style={styles.wrapGrid}
    >
        <PadContainer
          color="grey"
          isZero={false}
          size={50}
          onClick={props.onDecimal}
        >
          .
        </PadContainer>
          {props.numberPad.map((num: Object, index: number) =>
            <NumberPad
              key={`num-${index}`}
              pad={index}
              size={50}
              onClick={props.onChange}
            />
          )}
    </div>
  );
}

export function AnswerSection(props: AnswerSectionProps) {
  return(
    <div style={styles.calculateResult}>
      <p style={styles.resultText}>{props.result}</p>
    </div>
  );
}

export function PadSection(props: PadSectionProps) {
  return(
    <PadContainer
        color={props.color}
        isZero={props.isZero}
        size={props.size}
        onClick={props.onClick}
    >
      {props.label}
    </PadContainer>
  );
}
