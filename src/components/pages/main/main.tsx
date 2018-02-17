import * as React from 'react';
import Header from '../../organisms/header';
import { ExpendingDivProps, MainProps, MainStates } from './types';
import { styles } from './styles';

const issueList = [
  {
    id: 'issue001',
    issueTitle: 'styled-component & jest',
    howToSolve: `Problem: Cannot find module \n
                'styled-components/lib/models/StyleSheet' from 'utils.js'\n
                Solved: npm install jest-styled-components@next`,
    complete: true,
    selected: false,
  },
  {
    id: 'issue002',
    issueTitle: 'resize : font-size',
    howToSolve: `Problem: 폰트가 컨테이너에맞게 responsive 방법 \n
                 React-Native 의 경우에는 'allowFontScaling'로 적용하지만, \n
                 CSS의 경우 font-size를 변경하는 방식을 찾아한다.
                `,
    complete: false,
    selected: false,
  },
];

function ExpendingDiv(props: ExpendingDivProps) {
  return(
    <div onClick={() => props.onClick(props.idx, props.selected)}>
      <div style={styles.expendingDiv.titleContainer}>
        <p style={styles.expendingDiv.titleText}>
          [{props.idx + 1}] {props.list.issueTitle}
        </p>
      </div>
      {props.selected &&
        <div style={styles.expendingDiv.contentContainer}>
          <p style={{margin: 0, whiteSpace: 'pre'}}>
            {props.list.howToSolve}
          </p>
        </div>
      }
    </div>
  );
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
                list={list}
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
