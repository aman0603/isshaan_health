"use client"

import { motion } from "framer-motion"
import { ArrowRight, Award, Users, Globe, ChevronRight, MapPin, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import { useLanguage } from "../contexts/LanguageContext"

// Replace top brands with best selling products
const bestSellingProducts = [
  {
    id: 1,
    name: "AMB-KOF PLUS",
    category: "Respiratory Care",
    description: "Advanced cough syrup with triple action formula for effective respiratory relief.",
    image: "/placeholder.svg?height=200&width=200",
    keyFeatures: ["Triple Action Formula", "Fast Relief", "Suitable for All Ages"],
    website: "https://ambkofplus.com", // External website
    salesVolume: "2M+ Units Sold",
    marketShare: "Leading Brand",
  },
  {
    id: 2,
    name: "CARDIO-PLUS",
    category: "Cardiovascular Health",
    description: "Comprehensive cardiovascular protection with dual-action cholesterol management.",
    image: "/placeholder.svg?height=200&width=200",
    keyFeatures: ["Dual Action", "Heart Protection", "Cholesterol Control"],
    website: "https://cardioplus.com", // External website
    salesVolume: "1.5M+ Units Sold",
    marketShare: "Top 3 Brand",
  },
  {
    id: 3,
    name: "GASTRO-HEAL",
    category: "Digestive Health",
    description: "Advanced gastric protection and healing with proton pump inhibitor technology.",
    image: "/placeholder.svg?height=200&width=200",
    keyFeatures: ["Gastric Protection", "Fast Healing", "Long-lasting Relief"],
    website: "https://gastroheal.com", // External website
    salesVolume: "1.2M+ Units Sold",
    marketShare: "Market Leader",
  },
  {
    id: 4,
    name: "IMMUNO-BOOST",
    category: "Immunity",
    description: "Complete immunity booster with essential vitamins and minerals.",
    image: "/placeholder.svg?height=200&width=200",
    keyFeatures: ["Complete Nutrition", "Immunity Boost", "Energy Enhancement"],
    website: "https://immunoboost.com", // External website
    salesVolume: "800K+ Units Sold",
    marketShare: "Growing Brand",
  },
  {
    id: 5,
    name: "PAIN-RELIEF",
    category: "Pain Management",
    description: "Topical pain relief gel with anti-inflammatory action for targeted relief.",
    image: "/placeholder.svg?height=200&width=200",
    keyFeatures: ["Topical Application", "Anti-inflammatory", "Targeted Relief"],
    website: "https://painrelief.com", // External website
    salesVolume: "600K+ Units Sold",
    marketShare: "Trusted Brand",
  },
]

const manufacturers = [
  {
    name: "PharmaEx Manufacturing Ltd.",
    location: "New York, USA",
    certifications: ["FDA Approved", "ISO 9001:2015", "WHO GMP"],
    capacity: "50 Million Units/Year",
    specialization: "Tablets & Capsules",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "PharmaEx Biologics",
    location: "California, USA",
    certifications: ["FDA Approved", "ISO 13485", "cGMP"],
    capacity: "10 Million Vials/Year",
    specialization: "Injectable & Biologics",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "PharmaEx Liquids",
    location: "Texas, USA",
    certifications: ["FDA Approved", "ISO 9001:2015"],
    capacity: "25 Million Bottles/Year",
    specialization: "Syrups & Suspensions",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function Home() {
  const { t } = useLanguage()

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20"
          />
          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-40 right-20 w-32 h-32 bg-yellow-300 rounded-full opacity-15"
          />
          <motion.div
            animate={{ y: [-30, 30, -30] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-yellow-400 rounded-full opacity-25"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                {t("heroTitle")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              {t("heroSubtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/about"
                className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>{t("learnMore")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                to="/products/our-products"
                className="group border-2 border-yellow-500 text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Products
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-yellow-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Company Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("ourMission")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("missionText")}</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("ourVision")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("visionText")}</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("qualityAssurance")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("qualityText")}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Products
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of pharmaceutical products designed to meet diverse healthcare needs.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{t("genericProducts")}</h3>
                <ChevronRight className="w-6 h-6 text-yellow-500 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                High-quality generic medications that provide affordable healthcare solutions without compromising on
                efficacy.
              </p>
              <Link
                to="/products/generic"
                className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-200"
              >
                View Generic Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Our Products</h3>
                <ChevronRight className="w-6 h-6 text-yellow-500 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Innovative branded pharmaceuticals developed through extensive research and clinical trials.
              </p>
              <Link
                to="/products/our-products"
                className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-200"
              >
                View Our Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Best Selling Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Best Selling{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Products
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our top-performing pharmaceutical products trusted by healthcare professionals and patients
              worldwide.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {bestSellingProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="group bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-20 h-20 mx-auto mb-4 rounded-full object-cover border-4 border-yellow-100"
                  />
                  <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{product.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-center">{product.description}</p>

                <div className="space-y-2 mb-4">
                  {product.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-lg p-3 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Sales Volume:</span>
                    <span className="font-semibold text-green-600">{product.salesVolume}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="text-gray-600">Market Position:</span>
                    <span className="font-semibold text-blue-600">{product.marketShare}</span>
                  </div>
                </div>

                <a
                  href={product.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Visit Product Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Manufacturers Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Manufacturing
              </span>{" "}
              Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art manufacturing facilities ensuring the highest quality standards and regulatory
              compliance.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {manufacturers.map((manufacturer, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <img
                  src={manufacturer.image || "/placeholder.svg"}
                  alt={manufacturer.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{manufacturer.name}</h3>

                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">{manufacturer.location}</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">Specialization:</p>
                    <p className="text-sm text-gray-600">{manufacturer.specialization}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">Production Capacity:</p>
                    <p className="text-sm text-gray-600">{manufacturer.capacity}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">Certifications:</p>
                    <div className="flex flex-wrap gap-1">
                      {manufacturer.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">3</div>
                <div className="text-gray-600">Manufacturing Units</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">85M+</div>
                <div className="text-gray-600">Units/Year Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">15+</div>
                <div className="text-gray-600">Quality Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">99.9%</div>
                <div className="text-gray-600">Quality Compliance</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("becomeDistributor")}</h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">{t("distributorText")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/distributors"
                className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn More
              </Link>
              <Link
                to="/career"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
