"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { commerciallyAvailableProducts } from "@/data/commerciallyAvailableProducts"

const PRODUCTS_PER_PAGE = 15

export default function OurProducts() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [...new Set(commerciallyAvailableProducts.map((p) => p.type))]

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  const filteredProducts = commerciallyAvailableProducts.filter((product) => {
    const matchCategory = selectedCategory ? product.type === selectedCategory : true
    const matchSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.composition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.registeredCountries.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  )

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-300 rounded-full opacity-25 animate-pulse delay-1000" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900"
          >
            Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Products</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive range of branded pharmaceutical products, neatly categorized for easy access.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button
              onClick={() => {
                setSelectedCategory(null)
                setCurrentPage(1)
              }}
              className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all duration-200 ${
                selectedCategory === null
                  ? "bg-yellow-100 border-yellow-500 text-yellow-800"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-yellow-50 hover:border-yellow-300"
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentPage(1)
                }}
                className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-yellow-100 border-yellow-500 text-yellow-800"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-yellow-50 hover:border-yellow-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex justify-center mb-4">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search by name, salt, or country..."
                className="w-full px-5 py-3 border-2 border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-yellow-500"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Product List</h2>
            <p className="text-gray-600">{filteredProducts.length} matching products found</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {paginatedProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full flex flex-col"
              >
                <div className="relative">
                  <img
                    src={`/${product.image || "placeholder.svg"}`}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                      {product.status}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-semibold">
                      {product.type}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  <div className="text-sm text-gray-600 mt-2 flex-1 space-y-1">
                    <p><span className="font-semibold">Composition:</span> {product.composition.substring(0, 80)}...</p>
                    <p><span className="font-semibold">Packing:</span> {product.packing}</p>
                    <p><span className="font-semibold">Countries:</span> {product.registeredCountries}</p>
                  </div>
                  <div className="pt-4 mt-auto border-t border-gray-100">
                    <Link
                      href={`/products/our-products/${product.type.toLowerCase()}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-2 px-4 rounded-lg font-semibold text-center block hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center px-4 py-2 rounded-lg border text-sm font-medium bg-white hover:bg-yellow-50 disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </button>
              <span className="text-sm font-medium text-gray-700">Page {currentPage} of {totalPages}</span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center px-4 py-2 rounded-lg border text-sm font-medium bg-white hover:bg-yellow-50 disabled:opacity-50"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
