import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'

import Layout, { metadata } from './layout'

describe('Must be contain Layout', () => {
  test('Metadata and children in the document', async () => {
    render(
      <Layout>
        <h1>Testing with Jest</h1>
      </Layout>
    )

    expect(screen.getByText('Testing with Jest')).toBeInTheDocument()

    waitFor(() => {
      expect(document.querySelector('title')?.textContent).toEqual(metadata.title)
      expect(document.querySelector("meta[name='description']")?.content).toEqual(metadata.description)
    })
  })
})
