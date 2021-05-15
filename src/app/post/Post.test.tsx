import React from 'react';

import { render } from '../../tests';
import { PostContainer } from '../post/Post';
import { postMock, postsMock } from '../../api/mocks/mockData';

describe('Post page', () => {
  it('renders hero section correctly', () => {
    const { getByText, getAllByText } = render(<PostContainer post={postMock} relatedPosts={postsMock} />);

    expect(getAllByText('Highway of Tears')).toHaveLength(2);
    expect(getByText('The Murder of Alishia Germaine')).toBeInTheDocument();
  });

  it('renders sidebar correctly', () => {
    const { getByText } = render(<PostContainer post={postMock} relatedPosts={postsMock} />);

    expect(getByText('Category')).toBeInTheDocument();
    expect(getByText('Location')).toBeInTheDocument();
    expect(getByText('Year')).toBeInTheDocument();
    expect(getByText('Share')).toBeInTheDocument();
    expect(getByText('1994')).toBeInTheDocument();
    expect(getByText('Prince George, British Columbia')).toBeInTheDocument();
  });
});