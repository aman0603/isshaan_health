"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Package } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { genericProducts } from "../data/genericProducts"

export default function GenericProducts() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(genericProducts)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10 // You can adjust this

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    const filtered = genericProducts.filter(
      (item) =>
        item.Product.toLowerCase().includes(term.toLowerCase()) ||
        item.Composition.toLowerCase().includes(term.toLowerCase()),
    )
    setFilteredProducts(filtered)
    setCurrentPage(1) // Reset to first page when searching
  }

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem)

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: "smooth" }) // Optional: scroll to top
    }
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
              {t("genericProducts")}{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              High-quality generic medications that provide affordable healthcare solutions without compromising on
              efficacy and safety.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t("searchProducts")}
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Table */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-yellow-500 to-yellow-600">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Package className="w-6 h-6 mr-3" />
                {t("genericProducts")} ({filteredProducts.length})
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">S.No</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Composition</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Packing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <AnimatePresence>
                    {currentItems.map((product, index) => (
                      <motion.tr
                        key={product.SNo}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="hover:bg-yellow-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{product.SNo}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{product.Product}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{product.Composition}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{product.Packing}</td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No products found matching your search.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 py-6 bg-white">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border rounded-full text-sm bg-gray-100 hover:bg-yellow-100 disabled:opacity-50"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-4 py-2 border rounded-full text-sm ${
                      currentPage === page
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-100 hover:bg-yellow-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border rounded-full text-sm bg-gray-100 hover:bg-yellow-100 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
