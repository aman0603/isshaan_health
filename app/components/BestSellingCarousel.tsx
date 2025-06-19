"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const bestSellingProducts = [
  {
    id: 1,
    name: "Remijoint",
    image: "/remi.jpg",
    link: "www.remijoint.com",
  },
  {
    id: 2,
    name: "Bolnol",
    image: "/BolnolTablet.jpg",
    link: "https://bolnol.vercel.app",
  },
  {
    id: 3,
    name: "Montafex",
    image: "/Montafex.jpg",
    link: "www.montafex.com",
  },
  {
    id: 4,
    name: "Ispanol",
    image: "/ispanolplus.jpg",
    link: "https://ispanol.uz/",
  },
  {
    id: 5,
    name: "Hepanol",
    image: "/Hepanol.png",
    link: "https://gepanol.uz/",
  },
]

export default function BestSellingCarousel() {
  const [startIndex, setStartIndex] = useState(0)

  const visibleCount = 3
  const total = bestSellingProducts.length

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + visibleCount) % total)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const visibleProducts = []
  for (let i = 0; i < visibleCount; i++) {
    visibleProducts.push(bestSellingProducts[(startIndex + i) % total])
  }

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Best Selling{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Products
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {visibleProducts.map((product) => {
            const isExternal = product.link.startsWith("http") || product.link.startsWith("www")
            const href = product.link.startsWith("www") ? `https://${product.link}` : product.link

            const content = (
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              </motion.div>
            )

            return isExternal ? (
              <a
                key={product.id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <Link key={product.id} href={href} className="block">
                {content}
              </Link>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {Array.from({ length: Math.ceil(total / visibleCount) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i * visibleCount)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                startIndex === i * visibleCount ? "bg-yellow-600 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
