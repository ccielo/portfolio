import styled from 'styled-components';

export interface ImageProps {
  active: boolean;
  src: string;
}

export interface ParagraphProps {
  active: boolean;
}

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  opacity: ${(props: ImageProps) => props.active ? 1 : 0.5};
  src: ${(props: ImageProps) => props.src};
`;

export const Paragraph = styled.p`
  font-size: 14;
  opacity: ${(props: ParagraphProps) => props.active ? 1 : 0.5};
`;