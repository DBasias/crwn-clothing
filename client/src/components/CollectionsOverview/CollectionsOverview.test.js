import React from 'react';
import { shallow } from 'enzyme';

import { CollectionsOverview } from './';

it('should render CollectionOverview component', () => {
  expect(shallow(<CollectionsOverview collections={[]} />)).toMatchSnapshot();
});
