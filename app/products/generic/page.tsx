"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Package } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

import {
  tablet,
  capsule,
  soft_gel,
  edrops,
  liquidOral,
  ointment,
  injection,
  effervescent,
  herbal,
  neutraceutal,
} from "@/data/genericProducts"

const categoryMap = {
  tablet,
  capsule,
  soft_gel,
  edrops,
  liquidOral,
  ointment,
  injection,
  effervescent,
  herbal,
  neutraceutal,
}

const allData = Object.entries(categoryMap).flatMap(([type, items]) =>
  (items || []).map((item) => ({ ...item, type }))
)

export default function GenericProducts() {
  const { t } = useLanguage()
  const [selectedType, setSelectedType] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(allData)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 15

  useEffect(() => {
    let filtered = selectedType === "all"
      ? allData
      : allData.filter((item) => item.type === selectedType)

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        (item) =>
          item.Product.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.Composition.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    const start = (currentPage - 1) * itemsPerPage
    const paginated = filtered.slice(start, start + itemsPerPage)
    setFilteredProducts(paginated)
  }, [selectedType, searchTerm, currentPage])

  const totalItems = allData.filter((item) => {
    const matchesType = selectedType === "all" || item.type === selectedType
    const matchesSearch =
      item.Product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Composition.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesSearch
  })

  const totalPages = Math.ceil(totalItems.length / itemsPerPage)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl font-bold text-gray-900">
              {t("genericProducts")}{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality generic medications for affordable, effective healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name or composition"
              value={searchTerm}
              onChange={(e) => {
                setCurrentPage(1)
                setSearchTerm(e.target.value)
              }}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          </div>

          {/* Category Dropdown */}
          <select
            value={selectedType}
            onChange={(e) => {
              setCurrentPage(1)
              setSelectedType(e.target.value)
            }}
            className="border border-gray-300 rounded-full px-5 py-2 text-gray-700"
          >
            <option value="all">All Types</option>
            {Object.keys(categoryMap).map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Table */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-2xl font-bold flex items-center">
              <Package className="w-6 h-6 mr-3" />
              Showing {filteredProducts.length} of {totalItems.length} Products
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 font-semibold text-gray-700">S.No</th>
                    <th className="px-6 py-3 font-semibold text-gray-700">Type</th>
                    <th className="px-6 py-3 font-semibold text-gray-700">Product</th>
                    <th className="px-6 py-3 font-semibold text-gray-700">Composition</th>
                    <th className="px-6 py-3 font-semibold text-gray-700">Packing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProducts.map((product) => (
                    <tr key={`${product.type}-${product.SNo}`} className="hover:bg-yellow-50">
                      <td className="px-6 py-4">{product.SNo}</td>
                      <td className="px-6 py-4 capitalize">{product.type}</td>
                      <td className="px-6 py-4">{product.Product}</td>
                      <td className="px-6 py-4">{product.Composition}</td>
                      <td className="px-6 py-4">{product.Packing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <Package className="w-12 h-12 mx-auto mb-4" />
                  No products found.
                </div>
              )}
            </div>

            {/* Pagination - Prev / Next / Page */}
            <div className="flex justify-center items-center gap-4 py-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-full border bg-white text-gray-700 hover:bg-yellow-100 disabled:opacity-50"
              >
                « Previous
              </button>
              <span className="text-sm font-medium text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-full border bg-white text-gray-700 hover:bg-yellow-100 disabled:opacity-50"
              >
                Next »              
              </button>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
