import * as React from 'react';

interface ButtonProps {
  onClick: () => void;
  size?: number;
  styles?: React.CSSProperties;
  color?: string;
}

interface IconButtonProps extends ButtonProps {
  src: ICON_TYPE;
}

const Button: React.SFC<ButtonProps> = (props) => {
    return (
      <div
        style={{
          backgroundColor: props.color,
          width: props.size ? props.size : 50,
          height: props.size ? props.size : 50,
          ...props.styles,
        }}
        onClick={props.onClick}
      />
    );
  };

export const iconList = {
  close: require('../../../../../../assets/icons/close_black.png'),
  heart_fill: require('../../../../../../assets/icons/heart_fill.png'),
  heart_unfill: require('../../../../../../assets/icons/heart_unfill.png'),
  comments: require('../../../../../../assets/icons/comments.png'),
  bookmark: require('../../../../../../assets/icons/bookmark.png'),
};

export enum ICON_TYPE {
  CLOSE = iconList.close,
  FILLHEART = iconList.heart_fill,
  UNFILLHEART = iconList.heart_unfill,
  COMMENT = iconList.comments,
  BOOKMARK = iconList.bookmark,
}

export function IconButton (props: IconButtonProps) {
  return(
    <Button
      onClick={props.onClick}
      styles={{
        backgroundImage: `url(${props.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: props.size ? `${props.size}px ${props.size}px` : '100% 100%',
        width: props.size ? props.size : 50,
        height: props.size ? props.size : 50,
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        ...props.styles,
      }}
    />
  );
}

export default Button;
