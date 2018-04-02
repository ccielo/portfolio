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
  {
    id: 'issue003',
    issueTitle: 'val( ) is evil',
    howToSolve: `Problem: calculator를 만드는과정에서 A symbol B \n
                 의 방식으로 binding 된 function으로 만든후, \n
                 4가지 case를 한번에 묶는 것에 대한 refactoring에 대해 고려중.\n
                 검색 결과는 new function() or eval()을 이용하여 string을 계산하는 방식 \n
                 하지만, typescript 와 js에서 추천하지않는 방식이기에 어떤식이 좋을지 찾아야한다.
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
      test: 0,
    };
    this.toggleExpending = this.toggleExpending.bind(this);
    console.log('here is constructor', this.state.test);
  }

  componentWillMount() {
    console.log('here is componentWillMount', this.state.test);
  }

  componentDidMount() {
      // this.setState({test: 1});
      console.log('here is componentDidMount', this.state.test);
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
    console.log('here is render', this.state.test);
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
