import React from 'react';
import { shallow } from 'enzyme';
import App from '../containers/App';

describe('App container rendering', () => {
  it('App container is rendering without crashing', () => {
    shallow(<App/>);
  });
});
