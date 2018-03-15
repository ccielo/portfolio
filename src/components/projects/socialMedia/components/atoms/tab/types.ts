
export interface TabProps {
  onSelect: (value: number) => void;
  labelList: Array<string>;
  childrenList: Array<React.ReactNode>;
}

export interface TabState {
  selected: number;
  labelList: Array<string>;  
  childrenList: Array<React.ReactNode>;
}

export interface LabelListComponentProps {
  labelList: Array<string>;
  selected: number;
  toggleTab: (idx: number) => void;
}

export interface ContentComponentProp {
  childrenList: React.ReactNode;
}