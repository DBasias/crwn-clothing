import React from 'react';
import { shallow } from 'enzyme';

import { Directory } from './';

it('should render Directory component', () => {
  expect(shallow(<Directory sections={[]} />)).toMatchSnapshot();
});
