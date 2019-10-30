import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPage } from './';
import CollectionItem from '../../components/CollectionItem';

describe('CollectionPage', () => {
  let wrapper,
    mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    const mockCollecion = {
      items: mockItems,
      title: 'Test'
    };

    wrapper = shallow(<CollectionPage collection={mockCollecion} />);
  });

  it('should render CollectionPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the same number of CollectionItems as collection array', () => {
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
  });
});
