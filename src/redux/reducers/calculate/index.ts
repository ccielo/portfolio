import { CalculateAction, SetCalculateValue } from '../../actions/calculate/';

export interface CalculateTypes {
}

export const initialAuthState: CalculateTypes = {
};

export default function calculateReducer(state: CalculateTypes = initialAuthState, action: CalculateAction): CalculateTypes {
  switch (action.type) {
    case SetCalculateValue:
      return {
        ...state,
      };
    default:
      return state;
  }
}
