import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { HeaderTitle } from '.'

describe('Must be contain Header Title component', () => {
  test('Receiving props in the component', () => {
    const title = 'Test Jest'
    const subTitle = 'Testing component with Jest'

    render(
      <HeaderTitle
        title={title}
        subtitle={subTitle}
      />
    )

    expect(screen.getByTestId('breadcrumb')).toHaveTextContent(title)
    expect(screen.getByTestId('title')).toHaveTextContent(title)
    expect(screen.getByText(subTitle)).toBeInTheDocument()
  })
})
