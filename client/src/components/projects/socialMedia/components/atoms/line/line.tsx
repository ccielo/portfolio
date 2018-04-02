import * as React from 'react';

interface LineProps {
  isVertical?: boolean;
  thickness: number;
  length: number | '100%';
  color?: string; 
}

const checkVertical = (value: LineProps) => {
    return {
      height: value.isVertical ? value.length : value.thickness,
      width: value.isVertical ? value.thickness : value.length,
      backgroundColor: value.color ? value.color : 'black',
    };
};

const Line: React.SFC<LineProps> = (props) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...checkVertical(props),
        }}
      />
    );
  };

export default Line;
