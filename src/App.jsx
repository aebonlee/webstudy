import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchModal from './components/SearchModal'
import MobileDrawer from './components/MobileDrawer'

const Home = lazy(() => import('./pages/Home'))
const BackendBasics = lazy(() => import('./pages/BackendBasics'))
const GitHubGuide = lazy(() => import('./pages/GitHubGuide'))
const DatabaseGuide = lazy(() => import('./pages/DatabaseGuide'))
const DeployGuide = lazy(() => import('./pages/DeployGuide'))
const QnA = lazy(() => import('./pages/QnA'))
const Education = lazy(() => import('./pages/Education'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function LoadingFallback() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      color: 'var(--text-secondary)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '32px',
          height: '32px',
          border: '3px solid var(--border-color)',
          borderTopColor: 'var(--primary)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
          margin: '0 auto 0.75rem'
        }} />
        <p style={{ margin: 0, fontSize: '0.9rem' }}>Loading...</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <SearchModal />
      <MobileDrawer />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/backend" element={<BackendBasics />} />
          <Route path="/github" element={<GitHubGuide />} />
          <Route path="/database" element={<DatabaseGuide />} />
          <Route path="/deploy" element={<DeployGuide />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
