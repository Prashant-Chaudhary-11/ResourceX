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
import "./style/product.css";
import './style/blog.css'

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
import ProductCatalog from "./pages/ProductCatalog";
import ProductDetails from "./pages/ProductDetails";
import StudyNotes from "./pages/StudyNotes";
import CheatSheets from "./pages/CheatSheets";
import Collections from "./pages/Collections";
import Templates from "./pages/Templates";
import { ScrollToTop } from './pages/ScrollToTop'; // Add this import
import Blog from "./pages/Blog-page" // Add blog pages
import BlogDetail from "./pages/BlogDetail"


function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this component */}
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
        <Route path="/product" element={<ProductCatalog defaultType="All" pageTitle="Products" />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/study-notes" element={<StudyNotes />} />
        <Route path="/cheat-sheets" element={<CheatSheets />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/templates" element={<Templates />} />

        {/* Blog Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />

      </Routes>

      <Footer />
    </Router>
  )
}

export default App