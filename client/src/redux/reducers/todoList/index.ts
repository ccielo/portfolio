import { TodoListAction, AddItemValue } from '../../actions/todoList/';

export interface TodoItemTypes {
  items: Array<object>;
  title: string;
}

export interface TodoListTypes {
  list: Array<TodoItemTypes>;
}

export const initialState: TodoListTypes = {
  list: [
    {
      title: 'title 1',
      items: [
        {
          text: 'item',
          completed: false,
        },
      ],
    },
    {
      title: 'title 2',
      items: [
        {
          text: 'item',
          completed: false,
        },
      ],
    }
  ],
};

export default function todoReducer(state: TodoListTypes = initialState, action: TodoListAction): TodoListTypes {
  switch (action.type) {
    case AddItemValue:
      return {
        ...state,
        list : [
          ...state.list,
          {
            title: action.title,
            items: [
              {
                text: action.text,
                completed: false,
              },
            ],
          }
        ]
      };
    default:
      return state;
  }
}
