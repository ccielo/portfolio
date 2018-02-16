import * as React from 'react';
import Header from '../../organisms/header';
import { History } from 'history';
import { styles } from './styles';

export interface MainProps {
  history: History;
}

export interface ExpendingDivProps {
  onClick: (idx: number, selected: boolean) => void;
  selected: boolean;
  idx: number;
}

const issueList = [
  {
    id: 'issue001',
    issueTitle: 'issue',
    howToSolve: 'howToSolve',
    complete: true,
    selected: false,
  },
];

function ExpendingDiv(props: ExpendingDivProps) {
  return(
    <div onClick={() => props.onClick(props.idx, props.selected)}>
      <div style={styles.expendingDiv.titleContainer}>
        <p style={styles.expendingDiv.titleText}>
          [{props.idx + 1}] issue title
        </p>
      </div>
      {props.selected &&
        <div style={styles.expendingDiv.contentContainer}>
          <p style={{margin: 0}}>
            solve
          </p>
        </div>
      }
    </div>
  );
}

export interface IssueListType {
  id: string;
  issueTitle: string;
  howToSolve: string;
  complete: boolean;
  selected: boolean;
}

export interface MainStates {
  issueList: Array<IssueListType>;
}

class Main extends React.Component<MainProps, MainStates> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      issueList: issueList,
    };
    this.toggleExpending = this.toggleExpending.bind(this);
  }

  toggleExpending(key: number, value: boolean) {
    let newState = [...this.state.issueList];
    newState.map((issue, idx) => {
      if (idx === key) {
        issue.selected = !issue.selected;
      }
    });
    this.setState({issueList: newState});
  }

  render() {
    return (
        <div>
          <Header
            color="#ccebff"
            height={120}
            width={window.innerHeight}
            history={this.props.history}
          />
          {this.state.issueList.map((list, idx) => {
            return(
              <ExpendingDiv
                key={idx}
                idx={idx}
                onClick={this.toggleExpending}
                selected={list.selected}
              />
            );
          })}
        </div>
    );
  }
}

export default Main;
