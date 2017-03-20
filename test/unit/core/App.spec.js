import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import App from '../../../src/core/components/App';

describe('<App/>', () => {
  it('renders AppBar and EndpointList', () => {
    const component = shallow(<App />);

    expect(component.find('h2')).to.have.length(1);
  });
});
