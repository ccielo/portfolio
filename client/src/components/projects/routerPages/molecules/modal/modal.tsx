import * as React from 'react';
import { ReactNode } from 'react';
import { styles } from './styles';

export interface ModalProps {
  isShow: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

class Modal extends React.Component<ModalProps> {
  render() {
    return (
      <div className="modal-container">
        {this.props.isShow &&
        <div
          style={styles.backdropStyles}
          className="backdrop-container"
        >
          <div
            style={styles.modalStyles}
            onClick={this.props.onClick}
            className="modal-children"
          >
            {this.props.children}
          </div>
        </div>}
      </div>
    );
  }
}

export default Modal;