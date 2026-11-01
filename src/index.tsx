import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'

const container = document.getElementById('app')

if (container) {
  const root = ReactDOM.createRoot(container)
  root.render(<App />)
}

export { Footer } from './components/Footer.tsx'
export { Header } from './components/Header.tsx'
export { HomePage as Home } from './pages/HomePage.tsx'
export { DocsPage as Docs } from './pages/DocsPage.tsx'
