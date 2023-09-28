import '@testing-library/jest-dom'
import { useRouter } from 'next/router'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import { ErrorInfo } from '.'

jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      push: jest.fn(),
    }),
  }
})

describe('Must be contain Error Info component', () => {
  test('Receiving message props in the component', () => {
    const message = 'Test message component'
    render(<ErrorInfo message={message} />)

    expect(screen.getByText(message)).toBeInTheDocument()
  })

  test('Receiving message and action button props in the component', async () => {
    const message = 'Action button'
    const homeMessage = 'Cuidamos bem do seu pokémon, para ele cuidar bem de você'
    const { push } = useRouter()

    function actionButton() {
      push('/')
    }

    render(<ErrorInfo message={message} onNewAppointment={actionButton} />)

    expect(screen.getByText(message)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button'))
    waitFor(() => {
      expect(screen.getByText(homeMessage)).toBeInTheDocument()
    })
  })
})
