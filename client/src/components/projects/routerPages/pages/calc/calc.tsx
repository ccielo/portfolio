import * as React from 'react';
import Header from '../../organisms/header';
import { CalcProps, CalcStates } from './types';
import { symbolList, SYMBOL_TYPE } from '../../../../../constants';
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

// string <-> number, string <-> number, switch 시 일때 value reset.
// 4번 반복되는 불필요한 switch 문을 빼는 방식 - 조사: val(), new function() 이외.
  calculate() {
    const calc = this.state.value;
    let first = parseInt(calc['firstValue'], 10);
    let second = parseInt(calc['secondValue'], 10);
    let newResult = 0;
    
    switch (this.state.symbol) {
      case SYMBOL_TYPE.PLUS:
        newResult = first + second;
        let plusValue = this.state.isFirst ?
        {firstValue: newResult.toString(), secondValue: ''} : {firstValue: '', secondValue: newResult.toString()};
        return this.setState({
          result: newResult.toString(),
          value: plusValue,
        });
      case SYMBOL_TYPE.MINUS:
        newResult = first - second;
        let minusValue = this.state.isFirst ?
        {firstValue: newResult.toString(), secondValue: ''} : {firstValue: '', secondValue: newResult.toString()};
        return this.setState({
          result: newResult.toString(),
          value: minusValue,
        });
      case SYMBOL_TYPE.MULTIPLE:
        newResult = first * second;
        let multiValue = this.state.isFirst ?
        {firstValue: newResult.toString(), secondValue: ''} : {firstValue: '', secondValue: newResult.toString()};
        return this.setState({
          result: newResult.toString(),
          value: multiValue,
        });
      case SYMBOL_TYPE.DIVIDE:
        newResult = first / second;
        let divideValue = this.state.isFirst ?
        {firstValue: newResult.toString(), secondValue: ''} : {firstValue: '', secondValue: newResult.toString()};
        return this.setState({
          result: newResult.toString(),
          value: divideValue,
        });
      default:
        return newResult;
    }
  }

// value input: conditon => 0 이 반복되지 않게 한다. && print 를 보여준다.
  onChange(value: number) {
    let newValue = {...this.state.value};
    let trigger = this.state.isFirst ? 'firstValue' : 'secondValue';
    let length = newValue[trigger].length;
    newValue[trigger] = length === 1 && newValue[trigger].charAt(0) === '0' ?
    value.toString() : newValue[trigger] + value.toString();
    this.setState({value: newValue});
    this.setState({result: newValue[trigger]});
  }

// decimal point : condition => 시작지점일때 반복되지 않는다. 
  onDecimal() {
    let newValue = {...this.state.value};
    let trigger = this.state.isFirst ? 'firstValue' : 'secondValue';
    newValue[trigger] = newValue[trigger].indexOf('.')  === -1 ? 
    newValue[trigger] + '.' : newValue[trigger];
    this.setState({value: newValue});
  }

// click symbol : switch target value
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
