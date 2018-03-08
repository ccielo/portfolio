import styled from 'styled-components';
import * as React from 'react';

interface ImageProperties {
  size: number;
  src?: string;
}

interface PostImageProperties extends ImageProperties {
  comments: number;
  liked: number;
}

const Image = styled.img`
  width: ${(p: ImageProperties) => `${p.size}px`};
  height: ${(p: ImageProperties) => `${p.size}px`};
`;

const ImageDiv = styled.div`
  position: relative;
  width: ${(p: ImageProperties) => `${p.size}px`};
  height: ${(p: ImageProperties) => `${p.size}px`};
`;

const HoverDiv = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    opacity: 0.8;
    background-color: #262626;
  }
`;

export function PostImage (props: PostImageProperties) {
  const path = require.context('../../../../../../', true);
  return(
    <ImageDiv size={props.size}>
      <Image size={props.size} src={path(props.src as string)} />
      <HoverDiv>
        <p style={{color: 'white', fontSize: 15, opacity: 1}}>
          Heart: {props.liked} Comments: {props.comments}
        </p>
      </HoverDiv>
    </ImageDiv>
  );
}

export default Image;