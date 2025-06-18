"use client"

import { useParams, Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Package,
  Calendar,
  MapPin,
  CheckCircle,
  Users,
  Baby,
  Shield,
  AlertTriangle,
  Thermometer,
  Info,
} from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { commerciallyAvailableProducts } from "../data/commerciallyAvailableProducts"

export default function ProductDetail() {
  const { category, productName } = useParams()
  const navigate = useNavigate()
  const { t } = useLanguage()

  // Find product by name and category
  const product = commerciallyAvailableProducts.find(
    (p) =>
      p.type.toLowerCase() === category?.toLowerCase() &&
      p.name.toLowerCase().replace(/\s+/g, "-") === productName?.toLowerCase(),
  )

  if (!product) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link
            to="/products/our-products"
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
          >
            Back to Our Products
          </Link>
        </div>
      </div>
    )
  }

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
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div className="text-gray-400">/</div>
            <Link
              to="/products/our-products"
              className="text-gray-600 hover:text-yellow-600 transition-colors duration-200"
            >
              Our Products
            </Link>
            <div className="text-gray-400">/</div>
            <Link
              to={`/products/our-products/${category}`}
              className="text-gray-600 hover:text-yellow-600 transition-colors duration-200"
            >
              {category?.charAt(0).toUpperCase() + category?.slice(1)}
            </Link>
            <div className="text-gray-400">/</div>
            <span className="text-gray-900 font-semibold">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-96 object-contain rounded-lg"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      product.status === "Registered" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-semibold">
                    {product.type}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-xl text-gray-600 leading-relaxed">{product.composition}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Package className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Packing</p>
                    <p className="text-gray-600">{product.packing}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Calendar className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Shelf Life</p>
                    <p className="text-gray-600">{product.shelfLife}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Status</p>
                    <p className="text-gray-600">{product.status}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Countries</p>
                    <p className="text-gray-600">{product.registeredCountries}</p>
                  </div>
                </div>
              </div>

              {/* Dosage */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-yellow-500" />
                  Dosage Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Adults:</p>
                      <p className="text-gray-600">{product.dosage.adults}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Baby className="w-5 h-5 text-pink-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Children:</p>
                      <p className="text-gray-600">{product.dosage.children}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Benefits */}
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                Benefits
              </h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">{benefit}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Indications */}
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-500" />
                Indications
              </h3>
              <ul className="space-y-2">
                {product.indications.map((indication, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">{indication}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Usage Instructions */}
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Info className="w-6 h-6 mr-2 text-yellow-500" />
                Usage Instructions
              </h3>
              <ul className="space-y-2">
                {product.usageInstructions.map((instruction, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">{instruction}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Precautions */}
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-orange-500" />
                Precautions
              </h3>
              <ul className="space-y-2">
                {product.precautions.map((precaution, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">{precaution}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Side Effects */}
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-red-500" />
                Side Effects
              </h3>
              <ul className="space-y-2">
                {product.sideEffects.map((effect, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">{effect}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Storage */}
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Thermometer className="w-6 h-6 mr-2 text-purple-500" />
                Storage Instructions
              </h3>
              <ul className="space-y-2">
                {product.storage.map((instruction, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">{instruction}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6"
          >
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Important Disclaimer</h4>
                <p className="text-yellow-700">{product.disclaimer}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Products
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commerciallyAvailableProducts
              .filter((p) => p.id !== product.id && p.type === product.type)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/our-products/${relatedProduct.type.toLowerCase()}/${relatedProduct.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <img
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    className="w-full h-32 object-contain mb-4"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{relatedProduct.type}</p>
                  <div className="text-yellow-600 font-semibold text-sm">View Details →</div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
