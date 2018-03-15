import * as React from 'react';
import { TabProps, TabState } from './types';
import { LabelListComponent, ContentComponent } from './components/components';

class Tab extends React.Component<TabProps, TabState> {
  constructor(props: TabProps) {
    super(props);
    this.state = {
      selected: 0,
      labelList: [],
      childrenList: [],
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  public componentDidMount () {
    this.setState({
      labelList: this.props.labelList,
      childrenList: this.props.childrenList,
    });
  }

  toggleTab (value: number) {
    this.setState({selected: value});
    this.props.onSelect(value);
  }

  public render(): JSX.Element {
    const {labelList, selected, childrenList} = this.state;
    return (
      <div>
        <LabelListComponent selected={selected} labelList={labelList} toggleTab={this.toggleTab} />
        <ContentComponent childrenList={childrenList[selected]} />
      </div>
    );
  }
}

export default Tab;
