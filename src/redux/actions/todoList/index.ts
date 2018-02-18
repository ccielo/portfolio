// Type: define types && action constant
export type AddItemType = 'AddItemType';
export const AddItemValue: AddItemType = 'AddItemType';

// Define Action Type
export interface AddItem {
  type: AddItemType;
  title: string;
  text: string;
}

// Action Creator.
export function AddItem(title: string, text: string): AddItem {
  return {
    type: AddItemValue,
    title,
    text,
  };
}

// All of Actions
export type TodoListAction = AddItem;