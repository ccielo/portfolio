import { AddItem } from '../../../redux/actions/todoList';
import { History } from 'history';

export interface TodoListProps {
  AddItem: typeof AddItem;
}

export interface TodoProps extends TodoListProps {
  history: History;
  list: Array<{title: string, items: Array<Object>}>;
}

export interface ListProps {
}

export interface TodoStates {
  isShow: boolean;
  selected: number;
}

export interface ButtonListProps {
  list: Array<{title: string, items: Array<Object>}>;
  onClick: (index: number) => void;
}

export interface ChildrenComponentProps {
  selected: number;
  list: Array<{title: string, items: Array<Object>}>;
  onClick: () => void;
}