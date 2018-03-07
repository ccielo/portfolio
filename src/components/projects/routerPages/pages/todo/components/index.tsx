import Button from '../../../atoms/button';
import { ButtonListProps, ChildrenComponentProps } from '../types';
import * as React from 'react';

export function ButtonList (props: ButtonListProps) {
  return(
    <div>
    {props.list.map((list, index) => {
      const title = list.title as string;
      return(
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <p style={{marginRight: 10}}>{index + 1}. {title}</p>
          <Button
            color="orange"
            size={35}
            label="open"
            onClick={() => props.onClick(index)}
          />
        </div>
      );
    })}
    </div>
  );
}

export function ChildrenComponent (props: ChildrenComponentProps) {
  return(
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <p>Title:</p>
        <p>{props.list[props.selected].title}</p>
      </div>
      <Button
        color="orange"
        size={50}
        label="close"
        onClick={props.onClick}
      />
    </div>
  );
}