import * as React from 'react';
import './styles.css';
import { IconButton } from '../../atoms/button/button';
interface HeaderProps {
  errorMessage: string;
}

interface HeaderState {

}

const iconList = [
  {
    src: require('../../../../../../assets/icons/sns_icon.png'),
    label: 'sns'
  },
  {
    src: require('../../../../../../assets/icons/note_icon.png'),
    label: 'others'
  },
  {
    src: require('../../../../../../assets/icons/user_icon.png'),
    label: 'Auth'
  },
];

class Header extends React.Component<HeaderProps, HeaderState> {
  public render(): JSX.Element {
    return (
      <div className="header">
        <div className="errorContainer">
          {this.props.errorMessage}
        </div>
        {iconList.map(icon =>
          <IconButton
            key={`icon-${icon.label}`}
            src={icon.src}
            size={35}
            onClick={() => alert('dd')}
            styles={{marginRight: '10px'}}
          />
        )}
      </div>
    );
  }
}

export default Header;
