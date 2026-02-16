import './App.css'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <div className="">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<Products />} />
        <Route path="/:categorySlug/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
