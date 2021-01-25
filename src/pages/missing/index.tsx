import React from 'react'

import { Box } from 'components/atoms'
import { SectionHeading } from 'components/molecules'
import { Page } from 'components/templates'

import { Category } from '../Pages.types';

const Missing = () => {
  return (
    <Page>
      <Box>
        <SectionHeading
          heading={Category.MISSING}
        />
      </Box>
    </Page>
  )
}

export default Missing
