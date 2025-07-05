"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const WeDeliverSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">We Deliver</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Broad Range of Affordable Finished Formulations</p>
        </div>
        
        <style jsx>{`
          .deliver-icon {
            transition: all 0.3s ease;
            animation: float 3s ease-in-out infinite;
          }
          .deliver-icon i {
            color: transparent;
            -webkit-text-stroke: 1px #0066cc;
            text-stroke: 1px #0066cc;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `}</style>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="deliver-icon text-blue-600 mb-4 mx-auto">
              <i className="fas fa-pills text-5xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Branded Formulations</h3>
          </div>
          <div className="p-4">
            <div className="deliver-icon text-blue-600 mb-4 mx-auto">
              <i className="fas fa-tag text-5xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Private Labels</h3>
          </div>
          <div className="p-4">
            <div className="deliver-icon text-blue-600 mb-4 mx-auto">
              <i className="fas fa-prescription-bottle-alt text-5xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Prescription Drugs</h3>
          </div>
          <div className="p-4">
            <div className="deliver-icon text-blue-600 mb-4 mx-auto">
              <i className="fas fa-store-alt text-5xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">OTCs</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export const OurServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive pharmaceutical solutions for global partners</p>
        </div>
        
        <style jsx>{`
          .service-icon {
            transition: all 0.3s ease;
            animation: bounce 2s ease-in-out infinite;
          }
          .service-icon i {
            color: transparent;
            -webkit-text-stroke: 1px #0066cc;
            text-stroke: 1px #0066cc;
          }
          @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}</style>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <div className="service-icon text-blue-600 mb-4 mx-auto">
              <i className="fas fa-industry text-5xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Turnkey Manufacturing</h3>
          </div>
          <div className="p-4">
            <div className="service-icon text-blue-600 mb-4 mx-auto">
              <i className="fas fa-handshake text-5xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Contract Development</h3>
          </div>
          <div className="p-4">
            <div className="service-icon text-blue-600 mb-4 mx-auto">
              <i className="fas fa-microscope text-5xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Co-Development</h3>
          </div>
          <div className="p-4">
            <div className="service-icon text-blue-600 mb-4 mx-auto">
              <i className="fas fa-clipboard-check text-5xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Validation Services</h3>
          </div>
          <div className="p-4">
            <div className="service-icon text-blue-600 mb-4 mx-auto">
              <i className="fas fa-file-alt text-5xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">In-licensing</h3>
          </div>
          <div className="p-4">
            <div className="service-icon text-blue-600 mb-4 mx-auto">
              <i className="fas fa-globe-americas text-5xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Regulatory Support</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProductsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pharmaceutical Formulations</h2>
              <p className="text-lg text-gray-600">High-quality medications for diverse therapeutic needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-600">
                <div className="text-blue-600 mb-3">
                  <i className="fas fa-heartbeat text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Chronic & Acute Therapies</h3>
                <p className="text-gray-600">Specialized formulations for long-term and immediate healthcare needs.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-600">
                <div className="text-blue-600 mb-3">
                  <i className="fas fa-shopping-basket text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">OTCs</h3>
                <p className="text-gray-600">Over-the-counter medications for common health conditions.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-600">
                <div className="text-blue-600 mb-3">
                  <i className="fas fa-atom text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Complex Formulations</h3>
                <p className="text-gray-600">Advanced drug delivery systems with specialized formulations.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-600">
                <div className="text-blue-600 mb-3">
                  <i className="fas fa-flask text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Novel Drug Delivery Systems</h3>
                <p className="text-gray-600">Innovative technologies for enhanced drug efficacy and patient compliance.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Herbal and Nutraceuticals</h2>
              <p className="text-lg text-gray-600">Natural solutions for holistic health and wellness</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-green-500">
                <div className="text-green-500 mb-3">
                  <i className="fas fa-capsules text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Vitamin Supplements</h3>
                <p className="text-gray-600">Essential vitamins for overall health and wellness.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-green-500">
                <div className="text-green-500 mb-3">
                  <i className="fas fa-rock text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mineral Supplements</h3>
                <p className="text-gray-600">Mineral formulations to support bodily functions.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-green-500">
                <div className="text-green-500 mb-3">
                  <i className="fas fa-leaf text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Health Supplements</h3>
                <p className="text-gray-600">Specialized supplements for targeted health benefits.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-green-500">
                <div className="text-green-500 mb-3">
                  <i className="fas fa-spa text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Wellness Products</h3>
                <p className="text-gray-600">Products designed to enhance overall wellbeing and lifestyle.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ExploreProductsSection = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Our Products Portfolio</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">Saga offers a diverse product range, including tablets, capsules, syrups, powders, liquids, injections, and ointments to meet the varied needs and specifications of its partners.</p>
        <Link href="/products/our-products" className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">Discover Our Products</Link>
      </div>
    </section>
  );
};

export const SagaImpactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">SAGA Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">By the Numbers</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="stats-card bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-blue-600">
            <div className="text-5xl font-bold text-blue-600 mb-2">25+</div>
            <h3 className="text-xl font-semibold mb-2">Years Market Experience</h3>
            <p className="text-gray-600">Decades of pharmaceutical expertise</p>
          </div>
          <div className="stats-card bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-blue-600">
            <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
            <h3 className="text-xl font-semibold mb-2">Markets Global Footprint</h3>
            <p className="text-gray-600">Serving customers worldwide</p>
          </div>
          <div className="stats-card bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-blue-600">
            <div className="text-5xl font-bold text-blue-600 mb-2">1000+</div>
            <h3 className="text-xl font-semibold mb-2">Dossiers</h3>
            <p className="text-gray-600">Comprehensive regulatory documentation</p>
          </div>
          <div className="stats-card bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-blue-600">
            <div className="text-5xl font-bold text-blue-600 mb-2">4</div>
            <h3 className="text-xl font-semibold mb-2">Global Offices</h3>
            <p className="text-gray-600">Strategic locations worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PartnerReasonsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Making a Difference</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Reasons to Partner With Us</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="partner-reason bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <i className="fas fa-building text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Cutting-edge Manufacturing Facility</h3>
            <p className="text-gray-600">State-of-the-art facilities with advanced technology and strict quality control.</p>
          </div>
          <div className="partner-reason bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <i className="fas fa-boxes text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Extensive and Diverse Product Portfolio</h3>
            <p className="text-gray-600">Wide range of formulations across multiple therapeutic categories.</p>
          </div>
          <div className="partner-reason bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <i className="fas fa-flask text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">In-house Formulation Expertise</h3>
            <p className="text-gray-600">Dedicated R&D team with deep pharmaceutical knowledge.</p>
          </div>
          <div className="partner-reason bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <i className="fas fa-certificate text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Regulatory Excellence</h3>
            <p className="text-gray-600">Strong regulatory capabilities and market understanding.</p>
          </div>
          <div className="partner-reason bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <i className="fas fa-tags text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
            <p className="text-gray-600">Cost-effective solutions without compromising on quality.</p>
          </div>
          <div className="partner-reason bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <i className="fas fa-globe text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Distribution Network</h3>
            <p className="text-gray-600">Established channels for efficient product distribution worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
