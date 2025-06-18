"use client"

import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Package, MapPin, Calendar, CheckCircle } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { commerciallyAvailableProducts } from "../data/commerciallyAvailableProducts"

export default function CategoryProducts() {
  const { category } = useParams()
  const { t } = useLanguage()

  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1)
  const categoryProducts = commerciallyAvailableProducts.filter(
    (product) => product.type.toLowerCase() === category?.toLowerCase(),
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
      {/* Header */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Link
              to="/products/our-products"
              className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Our Products</span>
            </Link>
            <div className="text-gray-400">/</div>
            <span className="text-gray-900 font-semibold">{categoryName}</span>
          </div>
        </div>
      </section>

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
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                {categoryName}
              </span>{" "}
              Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of {categoryName?.toLowerCase()} products designed for optimal therapeutic
              outcomes.
            </p>
            <div className="flex items-center justify-center space-x-4 text-lg">
              <Package className="w-6 h-6 text-yellow-500" />
              <span className="font-semibold text-gray-700">{categoryProducts.length} Products Available</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categoryProducts.map((product, index) => (
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
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.status === "Registered"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
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
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-yellow-500" />
                      {product.shelfLife}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                      {product.status}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-start space-x-2 mb-4">
                      <MapPin className="w-4 h-4 mt-0.5 text-yellow-500 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Registered Countries:</p>
                        <p className="text-sm text-gray-600">{product.registeredCountries}</p>
                      </div>
                    </div>
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

          {categoryProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
