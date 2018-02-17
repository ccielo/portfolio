export type SetCalculateType = 'SetCalculateType';

export const SetCalculateValue: SetCalculateType = 'SetCalculateType';

export interface SetCalculate {
  type: SetCalculateType;
}

export function SetCalculate(): SetCalculate {
  return {
    type: SetCalculateValue,
  };
}

export type CalculateAction = SetCalculate;