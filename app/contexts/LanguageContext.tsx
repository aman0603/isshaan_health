"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ru" | "fr" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    home: "Home",
    about: "About Us",
    products: "Products",
    distributors: "Distributors",
    contact: "Contact Us",
    career: "Career",
    heroTitle: "Leading Pharmaceutical Excellence",
    heroSubtitle: "Committed to improving global health through innovative medicines and quality healthcare solutions.",
    learnMore: "Learn More",
    ourMission: "Our Mission",
    missionText: "To provide high-quality, affordable pharmaceutical products that improve patient outcomes worldwide.",
    ourVision: "Our Vision",
    visionText: "To be a globally recognized pharmaceutical company known for innovation, quality, and patient care.",
    qualityAssurance: "Quality Assurance",
    qualityText:
      "We maintain the highest standards of quality control and regulatory compliance in all our operations.",
    genericProducts: "Generic Products",
    ourProduct: "Our Products",
    searchProducts: "Search products...",
    becomeDistributor: "Become a Distributor",
    distributorText:
      "Join our global network of trusted distributors and help us deliver quality healthcare solutions worldwide.",
    contactForm: "Contact Form",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    submit: "Submit",
    address: "Address",
    joinTeam: "Join Our Team",
    uploadCV: "Upload CV",
    companyOverview: "Company Overview",
    leadership: "Leadership Team",
    certifications: "Certifications & Quality Control",
  },
  ru: {
    home: "Главная",
    about: "О нас",
    products: "Продукты",
    distributors: "Дистрибьюторы",
    contact: "Контакты",
    career: "Карьера",
    heroTitle: "Ведущее фармацевтическое превосходство",
    heroSubtitle:
      "Стремимся улучшить глобальное здоровье через инновационные лекарства и качественные решения здравоохранения.",
    learnMore: "Узнать больше",
    ourMission: "Наша миссия",
    missionText:
      "Предоставлять высококачественные, доступные фармацевтические продукты, улучшающие результаты лечения пациентов по всему миру.",
    ourVision: "Наше видение",
    visionText:
      "Быть всемирно признанной фармацевтической компанией, известной инновациями, качеством и заботой о пациентах.",
    qualityAssurance: "Контроль качества",
    qualityText:
      "Мы поддерживаем высочайшие стандарты контроля качества и соответствия нормативным требованиям во всех наших операциях.",
    genericProducts: "Дженерики",
    ourProducts: "Наши продукты",
    searchProducts: "Поиск продуктов...",
    becomeDistributor: "Стать дистрибьютором",
    distributorText:
      "Присоединяйтесь к нашей глобальной сети надежных дистрибьюторов и помогите нам доставлять качественные решения здравоохранения по всему миру.",
    contactForm: "Форма обратной связи",
    name: "Имя",
    email: "Электронная почта",
    phone: "Телефон",
    message: "Сообщение",
    submit: "Отправить",
    address: "Адрес",
    joinTeam: "Присоединиться к команде",
    uploadCV: "Загрузить резюме",
    companyOverview: "Обзор компании",
    leadership: "Команда руководителей",
    certifications: "Сертификаты и контроль качества",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    products: "Produits",
    distributors: "Distributeurs",
    contact: "Contact",
    career: "Carrière",
    heroTitle: "Excellence pharmaceutique de premier plan",
    heroSubtitle:
      "Engagés à améliorer la santé mondiale grâce à des médicaments innovants et des solutions de santé de qualité.",
    learnMore: "En savoir plus",
    ourMission: "Notre mission",
    missionText:
      "Fournir des produits pharmaceutiques de haute qualité et abordables qui améliorent les résultats des patients dans le monde entier.",
    ourVision: "Notre vision",
    visionText:
      "Être une entreprise pharmaceutique mondialement reconnue pour son innovation, sa qualité et ses soins aux patients.",
    qualityAssurance: "Assurance qualité",
    qualityText:
      "Nous maintenons les plus hauts standards de contrôle qualité et de conformité réglementaire dans toutes nos opérations.",
    genericProducts: "Produits génériques",
    ourProducts: "Nos produits",
    searchProducts: "Rechercher des produits...",
    becomeDistributor: "Devenir distributeur",
    distributorText:
      "Rejoignez notre réseau mondial de distributeurs de confiance et aidez-nous à fournir des solutions de santé de qualité dans le monde entier.",
    contactForm: "Formulaire de contact",
    name: "Nom",
    email: "E-mail",
    phone: "Téléphone",
    message: "Message",
    submit: "Soumettre",
    address: "Adresse",
    joinTeam: "Rejoindre notre équipe",
    uploadCV: "Télécharger CV",
    companyOverview: "Aperçu de l'entreprise",
    leadership: "Équipe de direction",
    certifications: "Certifications et contrôle qualité",
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    products: "Productos",
    distributors: "Distribuidores",
    contact: "Contacto",
    career: "Carrera",
    heroTitle: "Excelencia farmacéutica líder",
    heroSubtitle:
      "Comprometidos a mejorar la salud global a través de medicamentos innovadores y soluciones de atención médica de calidad.",
    learnMore: "Saber más",
    ourMission: "Nuestra misión",
    missionText:
      "Proporcionar productos farmacéuticos de alta calidad y asequibles que mejoren los resultados de los pacientes en todo el mundo.",
    ourVision: "Nuestra visión",
    visionText:
      "Ser una empresa farmacéutica reconocida mundialmente por la innovación, calidad y atención al paciente.",
    qualityAssurance: "Aseguramiento de calidad",
    qualityText:
      "Mantenemos los más altos estándares de control de calidad y cumplimiento regulatorio en todas nuestras operaciones.",
    genericProducts: "Productos genéricos",
    ourProducts: "Nuestros productos",
    searchProducts: "Buscar productos...",
    becomeDistributor: "Convertirse en distribuidor",
    distributorText:
      "Únase a nuestra red global de distribuidores confiables y ayúdenos a entregar soluciones de atención médica de calidad en todo el mundo.",
    contactForm: "Formulario de contacto",
    name: "Nombre",
    email: "Correo electrónico",
    phone: "Teléfono",
    message: "Mensaje",
    submit: "Enviar",
    address: "Dirección",
    joinTeam: "Únete a nuestro equipo",
    uploadCV: "Subir CV",
    companyOverview: "Resumen de la empresa",
    leadership: "Equipo de liderazgo",
    certifications: "Certificaciones y control de calidad",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
