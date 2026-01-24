import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './style/common.css'
import './style/navigation.css'
import './style/footer.css'
import './style/home.css'

import { Header } from './pages/Header'
import { Footer } from './pages/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Welcome } from './pages/Welcome'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
