import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import './styles/global.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h1 style={{ color: '#E17055' }}>Something went wrong</h1>
          <pre style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', textAlign: 'left', overflow: 'auto', maxWidth: '600px', margin: '20px auto' }}>
            {this.state.error?.message || 'Unknown error'}
          </pre>
          <button onClick={() => window.location.reload()} style={{ padding: '10px 24px', background: '#0046C8', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>
            Reload
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
