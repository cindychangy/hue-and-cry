import React from 'react';

import { render } from '../../tests';
import { Home } from '../home/Home';
import { postsMock, sidebarPostsMock } from '../../api/mocks/mockData';

describe('Home page', () => {
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

  // it('renders Highway of Tears CTA correctly', () => {
  //   const { getByText } = render(<Home posts={postsMock} sidebarPosts={sidebarPostsMock} />);

  //   expect(getByText('The Highway of Tears is an isolated 725-kilometer stretch of Highway 16 between Prince George and Prince Rupert in British Columbia, Canada. This highway has been the location of many unsolved murders and disappearances of Indigenous women beginning as early as the 1970s.')).toBeInTheDocument();
  // });
});