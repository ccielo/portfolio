import * as React from 'react';
import { styles } from './styles';

export interface ButtonProps {
  color: string;
  size?: number;
  onClick: () => void;
  label: string; 
}

function Button(props: ButtonProps) {
  return(
    <div
      className="button-container"
      style={{
        backgroundColor: props.color,
        width: props.size ? props.size : 50,
        height: props.size ? props.size : 50,
        ...styles,
      }}
      onClick={props.onClick}
    >
      <p className="button-text" style={{color: 'white'}}>{props.label}</p>
    </div>
  );
}

export default Button;