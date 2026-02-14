import './App.css'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Products from './pages/Products'

function App() {

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
