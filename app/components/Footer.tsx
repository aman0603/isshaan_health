"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Isshaan Logo"
                className="w-25 h-25 object-contain rounded-lg"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading pharmaceutical company committed to improving global health through innovative medicines and
              quality healthcare solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                {t("home")}
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                {t("about")}
              </Link>
              {/* <Link href="/distributors" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                {t("distributors")}
              </Link> */}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Products</h3>
            <div className="space-y-2">
              <Link href="/products/generic" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                {t("genericProducts")}
              </Link>
              <Link href="/products/our-products" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                {t("Our Products")}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  G-94, G Block, Sector 63
                  <br />
                  Noida
                  <br />
                  Uttar Pradesh 201301
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 9560797536</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@isshaan.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
