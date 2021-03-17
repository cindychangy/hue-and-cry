import React from 'react';

import { Box } from 'components/atoms';
import { SectionHeading } from 'components/molecules';
import { Page } from 'components/templates';

import { Category } from '../Pages.types';

const CategoryHome = () => {
  return (
    <Page>
      <Box>
        <SectionHeading
          heading={Category.INDIGENOUS_WOMEN}
        />
      </Box>
    </Page>
  )
}

export default CategoryHome;
