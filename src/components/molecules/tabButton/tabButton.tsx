import * as React from 'react';
import { FlexContainer, FlexContainerProps } from '../../../utils';
import { Icon, Paragraph } from './styles';

export interface TabButtonPros {
  active: boolean;
  id: string;
  onClick?: () => void;
  src: string;
}

export interface TabDivProps extends FlexContainerProps {
  active: boolean;
  onClick?: () => void;
}

const TabDiv: React.StatelessComponent<TabDivProps> = props => {
  return(
    <FlexContainer
      direction={props.direction}
      align={props.align}
      justify={props.justify}
      onClick={props.onClick}
    >
      {props.children}
    </FlexContainer>
  );
};
const TabButton: React.StatelessComponent<TabButtonPros> = props => {
    const {active, id, onClick, src} = props;
    return(
      <TabDiv
        direction="column"
        align="center"
        justify="center"
        active={active}
        onClick={onClick}
      >
      <Icon active={active} src={src} />
        <Paragraph active={active}>{id}</Paragraph>
      </TabDiv>
    );
  };

export default TabButton;

TabDiv.displayName = 'TabDiv';
Icon.displayName = 'Icon';
Paragraph.displayName = 'Paragraph';
FlexContainer.displayName = 'FlexContainer';