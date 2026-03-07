import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchModal from './components/SearchModal'
import MobileDrawer from './components/MobileDrawer'
import Home from './pages/Home'
import BackendBasics from './pages/BackendBasics'
import GitHubGuide from './pages/GitHubGuide'
import DatabaseGuide from './pages/DatabaseGuide'
import DeployGuide from './pages/DeployGuide'
import QnA from './pages/QnA'
import Education from './pages/Education'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <SearchModal />
      <MobileDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backend" element={<BackendBasics />} />
        <Route path="/github" element={<GitHubGuide />} />
        <Route path="/database" element={<DatabaseGuide />} />
        <Route path="/deploy" element={<DeployGuide />} />
        <Route path="/qna" element={<QnA />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
