export interface ExpendingDivProps {
  onClick: (idx: number, selected: boolean) => void;
  selected: boolean;
  idx: number;
  list: IssueListType;
}

export interface IssueListType {
  id: string;
  issueTitle: string;
  howToSolve: string;
  complete: boolean;
  selected: boolean;
}