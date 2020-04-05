/* eslint react/jsx-props-no-spreading: off */
import { spy } from 'sinon';
import React from 'react';
import * as ReactRedux from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Counter from '../../app/features/counter/components/Counter';
import { configureStore, history } from '../../app/core/store';
import { Database } from '../../app/features/counter/@types';
import { ConnectedRouter } from 'connected-react-router';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const actions = {
    increment: spy(),
    incrementIfOdd: spy(),
    incrementAsync: spy(),
    decrement: spy()
  };

  jest.spyOn(ReactRedux, 'useSelector').mockImplementation(() => 1);

  const dispatch = jest.fn();
  jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => dispatch);

  const props = configureStore({ models: {} } as Database, { counter: 1 });

  const Component = () => (
    <ReactRedux.Provider store={props}>
      <ConnectedRouter history={history}>{<Counter />}</ConnectedRouter>
    </ReactRedux.Provider>
  );

  const component = mount(<Component />);

  return {
    component,
    Component,
    actions,
    dispatch,
    buttons: component.find('[data-tclass="btn"]'),
    p: component.find('.counter')
  };
}

describe('Counter component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should should display count', () => {
    const { p } = setup();
    expect(p.text()).toMatch(/^1$/);
  });

  it('should first button should call increment', () => {
    const { buttons, dispatch } = setup();
    buttons.at(0).simulate('click');
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should match exact snapshot', () => {
    const { Component } = setup();
    const tree = renderer.create(<Component />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should second button should call decrement', () => {
    const { buttons, dispatch } = setup();
    buttons.at(1).simulate('click');
    expect(dispatch).toBeCalledTimes(1);
  });

  it('should third button should call incrementIfOdd', () => {
    const { buttons, dispatch } = setup();
    buttons.at(2).simulate('click');
    expect(dispatch).toBeCalledTimes(1);
  });

  it('should fourth button should call incrementAsync', () => {
    const { buttons, dispatch } = setup();
    buttons.at(3).simulate('click');
    expect(dispatch).toBeCalledTimes(1);
  });
});
