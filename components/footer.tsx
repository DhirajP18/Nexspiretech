import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
               <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="Company Logo" className="w-10 h-10 object-cover rounded-lg" />
            </div>
              <span className="font-bold text-lg">NexSpire Technologies </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">Transforming businesses through innovative IT solutions.</p>
            <div className="text-xs text-gray-500">
              <p>UDYAM-GJ-24-0209371</p>
              <p>Registered IT Solutions Provider</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/" className="hover:text-teal-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@nexpire.com" className="hover:text-teal-400 transition">
                  hello@nexpire.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>Kolhapur, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 7338065815</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {currentYear} Nexpire Technologies. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-gray-400">
              <a href="#" className="hover:text-teal-400 transition text-sm">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-400 transition text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
