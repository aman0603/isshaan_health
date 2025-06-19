"use client";

import { ArrowRight } from "lucide-react"

export default function OurManufacturing() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-100 via-white to-transparent opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow-xl group">
          <img
            src="/plant.jpg"
            alt="Manufacturing Plant"
            className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Manufacturing Excellence
            </span>
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            At <strong>Naxcuure Healthcare</strong>, we operate with state-of-the-art infrastructure certified under
            <span className="font-medium text-yellow-600"> WHO-GMP, ISO</span> and{" "}
            <span className="font-medium text-yellow-600">FDA</span> standards. Our commitment to quality drives us to
            produce pharmaceuticals with global compliance and safety.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            From formulation to packaging, every step is engineered for excellence, ensuring world-class efficacy and
            reliability.
          </p>

          <a
            href="https://naxcuure.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
          >
            Visit Naxcuure.com
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
