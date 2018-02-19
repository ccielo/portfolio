import * as React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Button from '../../../components/atoms/button';

configure({ adapter: new Adapter() });

const props = {
  color: 'black',
  onClick: () => { console.log('click'); } ,
  label: 'button label',
};

const wrapper = shallow(<Button {...props} />);

it('랜더가 문제없이 된다.', () => {
  expect(wrapper).toBeDefined();
  expect(wrapper.find('div').hasClass('button-container')).toEqual(true);
  expect(wrapper.find('p').hasClass('button-text')).toEqual(true);
});

it('지정 size가 없다면 기본 값으로 랜더가 된다.', () => {
 const expectedWrapper = shallow(<Button {...props} />); 
 expect(expectedWrapper.prop('style').height).toEqual(50);
 expect(expectedWrapper.prop('style').width).toEqual(50);
});

it('지정 size가 있다면 size로 랜더가 된다.', () => {
  const expectedWrapper = shallow(<Button {...props} size={30} />); 
  expect(expectedWrapper.prop('style').height).toEqual(30);
  expect(expectedWrapper.prop('style').width).toEqual(30);
 });

it('onClick 이 동작한다.', () => {
  const onClick = jest.fn();
  const button = shallow((
    <Button
      label="click Button"
      color="black"
      onClick={onClick}
    />));
  button.find('div').simulate('click');
  expect(onClick.mock.calls.length).toEqual(1);
});