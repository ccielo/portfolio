import * as React from 'react';
import Header from '../../organisms/header';
import Modal from '../../molecules/modal';
import { connect } from 'react-redux';
import { AddItem } from '../../../redux/actions/todoList';
import { RootState } from '../../../redux/reducers/'; 
import { TodoProps, TodoStates, ListProps } from './types';
import { ButtonList, ChildrenComponent } from './components';

class Todo extends React.Component<TodoProps, TodoStates> {
  constructor(props: TodoProps) {
    super(props);
    this.state = {
      isShow: false,
      selected: 0,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  toggleModal() {
    this.setState({
      isShow: !this.state.isShow
    });
  }

  onSelect (select: number) {
    this.setState({
      selected: select,
      isShow: !this.state.isShow,
    });
  }

  render() {
    return (
        <div>
          <Header
            color="grey"
            height={120}
            width={window.innerHeight}
            history={this.props.history}
          />
          <p>Todo page</p>
          <p>todoList을 sns comment 형식처럼 생성</p>
          <p>각 ID - Click => 해당 todo item show - toggle button.</p>
          <p>RESTful - Json server library 활용 예정.</p>

          <ButtonList list={this.props.list} onClick={this.onSelect} />
          <Modal isShow={this.state.isShow} onClick={this.toggleModal}>
            <ChildrenComponent
              selected={this.state.selected}
              list={this.props.list}
              onClick={this.toggleModal}
            />
          </Modal>
        </div>
    );
  }
}

const mapStateToProps = (state: RootState): ListProps => {
  return {
    list: state.todoList.list
  };
};

const mapDispatchToProps = {
  AddItem: AddItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);