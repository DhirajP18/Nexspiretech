import { CheckCircle2 } from "lucide-react"

export default function WhyChoose() {
  const reasons = [
    "Production-grade code quality",
    "Agile development methodology",
    "Cloud-native architecture",
    "Ongoing support & maintenance",
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="bg-gradient-to-br from-teal-200 to-emerald-200 rounded-xl h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💼</div>
              <p className="text-gray-600">Your Digital Transformation Partner</p>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose NexSpire Technologies</h2>

            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700 text-lg">{reason}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-600 mt-8 leading-relaxed">
              We combine technical expertise with business acumen to deliver solutions that matter. Every project is
              tailored to your unique requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
