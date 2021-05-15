import React from 'react';

import { render } from '../../tests';
import { Home } from '../home/Home';
import { postsMock, sidebarPostsMock } from '../../api/mocks/mockData';

describe('Home Component', () => {
  it('renders featured stories correctly', () => {
    const { getByText } = render(<Home posts={postsMock} sidebarPosts={sidebarPostsMock} />);

    expect(getByText('The Disappearance of Tamara Chipman')).toBeInTheDocument();
    expect(getByText('The Murder of Vanessa Guillen')).toBeInTheDocument();
  });

  it('renders sidebar correctly', () => {
    const { getByText } = render(<Home posts={postsMock} sidebarPosts={sidebarPostsMock} />);

    expect(getByText('The Disappearance of Asha Degree')).toBeInTheDocument();
    expect(getByText('The Murder of Tina Priest')).toBeInTheDocument();
    expect(getByText('Featured Stories')).toBeInTheDocument();
    expect(getByText('Learn more about the mission of Hue and Cry.')).toBeInTheDocument();
  });
});