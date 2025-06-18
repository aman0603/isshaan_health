"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Package, Grid } from "lucide-react"
import { Link } from "react-router-dom"
import { useLanguage } from "../contexts/LanguageContext"
import { commerciallyAvailableProducts } from "../data/commerciallyAvailableProducts"

export default function OurProducts() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Get unique categories
  const categories = [...new Set(commerciallyAvailableProducts.map((product) => product.type))]

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
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-300 rounded-full opacity-25 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of branded pharmaceutical products organized by categories for easy
              navigation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-gray-600">Browse our products by category</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                selectedCategory === null
                  ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                  : "border-gray-200 hover:border-yellow-300 hover:bg-yellow-50"
              }`}
            >
              <Grid className="w-8 h-8 mx-auto mb-2" />
              <span className="text-sm font-semibold">All Products</span>
            </button>

            {categories.map((category) => {
              const categoryProducts = commerciallyAvailableProducts.filter((p) => p.type === category)
              return (
                <Link
                  key={category}
                  to={`/products/our-products/${category.toLowerCase()}`}
                  className="p-4 rounded-xl border-2 border-gray-200 hover:border-yellow-300 hover:bg-yellow-50 transition-all duration-300 text-center group"
                >
                  <Package className="w-8 h-8 mx-auto mb-2 text-gray-600 group-hover:text-yellow-600" />
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-yellow-700">{category}</span>
                  <div className="text-xs text-gray-500 mt-1">({categoryProducts.length} products)</div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Products Overview */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Products Overview</h2>
            <p className="text-gray-600">Complete list of our pharmaceutical products across all categories</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {commerciallyAvailableProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
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

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Composition:</span> {product.composition.substring(0, 80)}...
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Packing:</span> {product.packing}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Countries:</span> {product.registeredCountries}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      to={`/products/our-products/${product.type.toLowerCase()}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-2 px-4 rounded-lg font-semibold text-center block hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
