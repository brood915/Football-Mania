import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import { Button } from 'react-bootstrap';
import MainContainer from "../src/containers/MainContainer";

 
describe('<MainContainer />', function () {

 
  it('MainContainer has bootstrap btns', function () {
    const wrapper = mount(<MainContainer />);
    expect(wrapper.find('Button').exists()).to.equal(true);
  });
});