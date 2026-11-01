import React, { Component, type ReactNode } from 'react'
import { useMessages } from '../hooks/useLanguage.tsx'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

const DefaultErrorFallback: React.FC<{ error: Error | null }> = ({ error }) => {
  const messages = useMessages()

  return (
    <div className="page-shell">
      <h1 className="error">{messages['error-something-wrong']}</h1>
      <p className="error">{error?.message || messages['error-unexpected']}</p>
    </div>
  )
}

/**
 * Catches render errors and shows a fallback.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  /**
   * Creates the boundary with a healthy initial state.
   * @param props - Boundary props.
   */
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return <DefaultErrorFallback error={this.state.error} />
    }

    return this.props.children
  }
}
