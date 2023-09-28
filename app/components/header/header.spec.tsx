import '@testing-library/jest-dom'
import { ReactNode } from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import { Header } from '.'

type Mock = {
  children: ReactNode
}

jest.mock('next/link', () => {
  return ({ children }: Mock) => {
    return children;
  };
});

describe('Must be contain Header component', () => {
  test('Render the header component', async () => {
    const logoText = 'Centro Pokémon'
    const menu = ['Quem Somos', 'Agendar Consulta']
    const whoWeAreTitle = 'O Centro Pokémon'

    render(<Header />)

    const link = screen.getByText('Quem Somos');

    expect(screen.getByText(logoText)).toBeInTheDocument()
    expect(screen.getByTestId('logo')).toHaveAttribute('alt', logoText)

    menu.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })

    fireEvent.click(link)
    waitFor(() => {
      expect(screen.getByText(whoWeAreTitle)).toBeInTheDocument()
    })
  })
})
