import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './style/common.css'
import './style/navigation.css'
import './style/footer.css'
import './style/home.css'
import './style/responsive-mobile.css'
import './style/about.css'
import './style/contact.css'
import './style/faq.css'
import './style/legal.css'
import './style/pricing.css'

import { Header } from './pages/Header'
import { Footer } from './pages/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About-page'
import { Contact } from './pages/Contact'
import { Faq } from './pages/Faq'
import { Welcome } from './pages/Welcome'
import { CookiePolicy } from './pages/CookiePolicy'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfUse } from './pages/TermsOfUse'
import { Pricing } from './pages/Pricing'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />

      </Routes>

      <Footer />
    </Router>
  )
}

export default App
