import * as React from 'react';

interface TabProps {
  onSelect: (value: number) => void;
  arrayList: Array<ArrayListProperties>;
}

interface TabState {
  arrayList: Array<ArrayListProperties>;
  selected: number;
}

interface ArrayListProperties {
  label: string;
  children: React.ReactNode;
}

class Tab extends React.Component<TabProps, TabState> {
  constructor(props: TabProps) {
    super(props);
    this.state = {
      selected: 0,
      arrayList: [],
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  public componentDidMount () {
    this.setState({arrayList: this.props.arrayList});
  }

  toggleTab (value: number) {
    this.setState({selected: value});
    this.props.onSelect(value);
  }

  public render(): JSX.Element {
    const {arrayList, selected} = this.state;
    console.log(arrayList, 'array');
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {arrayList.map((tab, index) => {
          if (index === selected) {
            return (
              <div key={`tab-${index}`}>
                <p style={{margin: 0, color: 'red', cursor: 'default'}} onClick={() => this.toggleTab(index)}>{tab.label}</p>
              </div>
              );
            } else {
              return(
                <p 
                  key={`tab-${index}`}
                  style={{margin: 0, color: 'blue', cursor: 'default'}}
                  onClick={() => this.toggleTab(index)}
                >
                  {tab.label}
                </p>
              );
            }
          })
        }
      </div>
    );
  }
}

export default Tab;
