"use client"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="Company Logo" className="w-10 h-10 object-cover rounded-lg" />
            </div>
            <span className="font-bold text-lg text-gray-900">NexSpire</span>
            <span className="text-xs text-teal-600 ml-1">Technologies</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("home")} className="text-gray-700 hover:text-teal-600 transition">Home</button>
            <button onClick={() => scrollTo("services")} className="text-gray-700 hover:text-teal-600 transition">Services</button>
            <button onClick={() => scrollTo("aboutus")} className="text-gray-700 hover:text-teal-600 transition">About</button>
            <button onClick={() => scrollTo("ourwork")} className="text-gray-700 hover:text-teal-600 transition">Our Work</button>
            <button onClick={() => scrollTo("contact")} className="text-gray-700 hover:text-teal-600 transition">Contact</button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-emerald-100 flex flex-col gap-2">
            <button onClick={() => scrollTo("home")} className="block py-2 text-gray-700 hover:text-teal-600">Home</button>
            <button onClick={() => scrollTo("services")} className="block py-2 text-gray-700 hover:text-teal-600">Services</button>
            <button onClick={() => scrollTo("about")} className="block py-2 text-gray-700 hover:text-teal-600">About</button>
            <button onClick={() => scrollTo("ourwork")} className="block py-2 text-gray-700 hover:text-teal-600">Our Work</button>
            <button onClick={() => scrollTo("contact")} className="block py-2 text-gray-700 hover:text-teal-600">Contact</button>
            <button className="w-full mt-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-2 rounded-lg">Get Started</button>
          </div>
        )}
      </div>
    </nav>
  )
}
