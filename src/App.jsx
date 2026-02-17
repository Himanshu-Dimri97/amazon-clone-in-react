import './App.css'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import ScrollToTop from './components/ScrollToTop'

import Cart from './pages/Cart'
function App() {

  return (
    <div className="">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<ProductPage />} />
        <Route path="/:categorySlug/:slug" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
