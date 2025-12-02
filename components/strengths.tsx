import { Zap, Lock, Cpu, Code2 } from "lucide-react"

export default function Strengths() {
  const strengths = [
    { icon: Zap, title: "Fast Delivery", desc: "Quick turnaround without compromising quality" },
    { icon: Lock, title: "Secure & Reliable", desc: "Enterprise-grade security standards" },
    { icon: Cpu, title: "Scalable", desc: "Solutions that grow with your business" },
    { icon: Code2, title: "Modern Stack", desc: "Latest technologies and best practices" },
  ]

  return (
    <section className="py-2 md:py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900">
          Our Strengths
        </h2>

        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Why we stand out in delivering exceptional IT solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {strengths.map((strength, index) => {
            const Icon = strength.icon
            return (
              <div
                key={index}
                className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center mb-2">
                  <Icon size={24} className="text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {strength.title}
                </h3>

                <p className="text-gray-600">{strength.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
