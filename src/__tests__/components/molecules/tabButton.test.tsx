import * as React from 'react';
// currently conflict to load modules. import 'jest-styled-components';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import TabButton from '../../../components/projects/routerPages/molecules/tabButton';

configure({ adapter: new Adapter() });

const props = {
  active: false,
  id: 'tabId',
  onClick: () => { console.log('click'); } ,
  src: 'url',
};

const wrapper = shallow(<TabButton {...props} />);
const tabDiv = wrapper.find('TabDiv');
const icon = wrapper.find('Icon');
const paragraph = wrapper.find('Paragraph');

it('랜더가 문제없이 된다.', () => {
  expect(wrapper).toBeDefined();
});

it('예상하는 children components가 있다.', () => {
  expect(tabDiv).toHaveLength(1);
  expect(icon).toHaveLength(1);
  expect(paragraph).toHaveLength(1);
});

it('지정한 style props를 전달받는다.', () => {
  expect(tabDiv.prop('direction')).toEqual('column');
  expect(tabDiv.prop('align')).toEqual('center');
  expect(tabDiv.prop('justify')).toEqual('center');
});

it('icon src props가 전달된다', () => {
  expect(icon.prop('src')).toBeTruthy();
});

// it('icon 과 글자 색이 active = false일때 opacity가 달라진다.', () => {
//   expect(icon).toHaveStyleRule('opacity', '0.5');
//   expect(paragraph).toHaveStyleRule('opacity', '0.5');
//   expect(icon.prop('src')).toBeTruthy();
// });