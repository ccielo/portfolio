import * as React from 'react';
import { ViewProperties } from './types';

function View (props: ViewProperties) {
  const vertical = props.vertical;
  const horizontal = props.horizontal;
  return(
    <div
      style={{
        display: 'flex',
        flexDirection: props.isRow ? 'row' : 'column',
        alignItems: vertical,
        justifyContent: horizontal,
        margin: 0,
        padding: 0,
        ...props.styles,
      }}
    >
      {props.children}
    </div>
  );
}

export default View;