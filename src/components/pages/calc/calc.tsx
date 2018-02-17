import * as React from 'react';
import Header from '../../organisms/header';
import { CalcProps, CalcStates } from './types';
import { symbolList, SYMBOL_TYPE } from '../../../constants';
import { NumberPadSection, PadSection, AnswerSection } from './components';

class Calc extends React.Component<CalcProps, CalcStates> {
  constructor(props: CalcProps) {
    super(props);
    this.state = {
      numberPad: [],
      value: {
        firstValue: '',
        secondValue: '',
      },
      isFirst: true,
      result: '0',
      symbol: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onDecimal = this.onDecimal.bind(this);
    this.onSwitchPad = this.onSwitchPad.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {
    let newState = Array.apply(null, {length: 10}).map(Number.call, Number);
    this.setState({numberPad: newState});
  }

  calculate() {
    const calc = this.state.value;
    let first = parseInt(calc['firstValue'], 10);
    let second = parseInt(calc['secondValue'], 10);
    let newResult = 0;
    switch (this.state.symbol) {
      case SYMBOL_TYPE.PLUS:
        newResult = first + second;
        return this.setState({result: newResult.toString()});
      case SYMBOL_TYPE.MINUS:
        newResult = first - second;
        return this.setState({result: newResult.toString()});
      case SYMBOL_TYPE.MULTIPLE:
        newResult = first * second;
        return this.setState({result: newResult.toString()});
      case SYMBOL_TYPE.DIVIDE:
        newResult = first / second;
        return this.setState({result: newResult.toString()});
      default:
        return newResult;
    }
  }
  
  onChange(value: number) {
    let newValue = {...this.state.value};
    let trigger = this.state.isFirst ? 'firstValue' : 'secondValue';
    let length = newValue[trigger].length;
    newValue[trigger] = length === 1 && newValue[trigger].charAt(0) === '0' ?
    value.toString() : newValue[trigger] + value.toString();
    this.setState({value: newValue});
    this.setState({result: newValue[trigger]});
  }

  onDecimal() {
    let newValue = {...this.state.value};
    let trigger = this.state.isFirst ? 'firstValue' : 'secondValue';
    newValue[trigger] = newValue[trigger].indexOf('.')  === -1 ? 
    newValue[trigger] + '.' : newValue[trigger];
    this.setState({value: newValue});
  }

  onSwitchPad(symbol: string) {
    let newValue = {...this.state.value};
    let trigger = this.state.isFirst ? 'firstValue' : 'secondValue';
    newValue[trigger] = this.state.isFirst ? '0' : '0';
    this.setState({
      symbol: symbol,
      isFirst: !this.state.isFirst,
    });
  }

  render() {
    return (
        <div>
          <Header
            color="grey"
            height={120}
            width={window.innerHeight}
            history={this.props.history}
          />
          <p>Calculate page</p>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <NumberPadSection
              onDecimal={this.onDecimal}
              numberPad={this.state.numberPad}
              onChange={this.onChange}
            />
            <div>
              {symbolList.map((symbol, index) =>
                <PadSection
                  key={`symbol-${index}`}
                  color="orange"
                  isZero={false}
                  size={50}
                  onClick={() => this.onSwitchPad(symbol.text)}
                  label={symbol.text}
                />
              )}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <AnswerSection result={this.state.result} />
            <PadSection
              color="orange"
              isZero={false}
              size={50}
              onClick={this.calculate}
              label="="
            />
          </div>
        </div>
    );
  }
}

export default Calc;
