import React, { FC } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core/styles';
import theme  from '../theme/Theme';

const AllTheProviders: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }