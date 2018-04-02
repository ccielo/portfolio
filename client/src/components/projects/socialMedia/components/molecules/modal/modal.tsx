import * as React from 'react';
import { ReactNode } from 'react';
import { styles } from './styles';

export interface ModalProps {
  isShow: boolean;
  children?: ReactNode;
  onCloseRequest?: () => void;
  onToggle?: () => void;
  modalStyles?: React.CSSProperties;
}

class Modal extends React.Component<ModalProps> {
  render() {
    return (
      <div className="modal-container">
        {this.props.isShow &&
        <div
          style={styles.backdropStyles}
          onClick={this.props.onCloseRequest}
          className="backdrop-container"
        >
          <div
            style={{
              ...styles.modalStyles,
              ...this.props.modalStyles,
              backgroundColor: 'red'
            }}
            onClick={this.props.onToggle}
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