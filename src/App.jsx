import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/HomePage/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import ScrollToTop from './components/ScrollToTop'
import Cart from './pages/Cart'
import Checkout from "./pages/Checkout";
import OrderSuccess from './pages/Ordersuccess'

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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderSuccess />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
