import styled from 'styled-components';

export interface FlexContainerProps {
direction: string;
align: string;
justify: string;
}

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${(props: FlexContainerProps) => props.align};
  justify-content: ${(props: FlexContainerProps) => props.justify};
  flex-direction: ${(props: FlexContainerProps) => props.direction};
`;
