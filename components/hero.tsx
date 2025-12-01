import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-emerald-50 to-white overflow-hidden pt-8 pb-16">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-20 -mb-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          <div className="inline-block mb-2 px-4 py-1 bg-teal-100 rounded-full">
            <span className="text-teal-700 text-sm font-medium">
              Welcome to NexSpire Technologies
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
              Transform Your Business
            </span>
            <br className="hidden md:block" />
            <span className="text-gray-900">with Intelligent Digital Solutions</span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            We deliver cutting-edge IT solutions that empower enterprises to innovate, scale, and thrive in the digital world.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2">
              Contact Us <ArrowRight size={20} />
            </button>

            {/* Navigate to Our Work page */}
            <Link href="/#ourwork" passHref>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition">
                View Our Work
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
