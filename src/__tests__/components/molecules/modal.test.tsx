import * as React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Modal from '../../../components/projects/routerPages/molecules/modal';

configure({ adapter: new Adapter() });

const props = {
  isShow: false,
  children: <div>children</div>,
  onClick: () => { console.log('click'); } ,
};

const notShowWrapper = shallow(<Modal {...props} />);
const showWrapper = shallow(<Modal {...props} isShow={true} />); 

it('isShow false, true 각각 랜더가 문제없이 된다.', () => {
  expect(notShowWrapper).toBeDefined();
  expect(showWrapper).toBeDefined();
});

it('isShow 의 상태에 따라 children 이 render된다.', () => {
  expect(notShowWrapper.find('div').hasClass('modal-container')).toEqual(true);
  expect(showWrapper.find('div')).toHaveLength(4);
});