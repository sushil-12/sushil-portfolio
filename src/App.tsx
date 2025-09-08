import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavigation from './components/TopNavigation';
import HomePage from './components/HomePage';
import About from './components/About';
import Services from './components/Services';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import FloatingBusinessCardButton from './components/FloatingBusinessCardButton';
import SEOHead from './components/SEOHead';
import Analytics from './components/Analytics';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <Router>
      <SEOHead />
      <Analytics />
      <TopNavigation />
      <main className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingBusinessCardButton />
        <Footer />
      </main>
      <CookieConsent />
    </Router>
  );
}

export default App;