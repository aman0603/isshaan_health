"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LanguageProvider } from "./contexts/LanguageContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
// import Products from "./pages/Products"
import GenericProducts from "./pages/GenericProducts"
import OurProducts from "./pages/OurProducts"
import CategoryProducts from "./pages/CategoryProducts"
import Distributors from "./pages/Distributors"
import Contact from "./pages/Contact"
import Career from "./pages/Career"
import ProductDetail from "./pages/ProductDetail"
import "./globals.css"
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/products" element={<Products />} /> */}
              <Route path="/products/generic" element={<GenericProducts />} />
              <Route path="/products/our-products" element={<OurProducts />} />
              <Route path="/products/our-products/:category" element={<CategoryProducts />} />
              <Route path="/products/our-products/:category/:productName" element={<ProductDetail />} />
              <Route path="/distributors" element={<Distributors />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/career" element={<Career />} />
            </Routes>
          </main>
          <Footer />
        </div>
       
      </Router>
    </LanguageProvider>
  )
}
