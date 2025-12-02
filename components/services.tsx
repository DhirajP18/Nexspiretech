import { Code2, Globe, Smartphone } from "lucide-react"
import { ArrowRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      desc: "Scalable, maintainable solutions built with modern frameworks",
      techs: ["React", "Node.js", "TypeScript"],
      features: ["Full-stack development", "Microservices architecture", "API integrations"],
    },
    {
      icon: Globe,
      title: "Web Development",
      desc: "High-performance, SEO-optimized web applications",
      techs: ["Next.js", "Tailwind CSS"],
      features: ["Responsive design", "Progressive Web Apps", "E-commerce solutions"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile solutions",
      techs: ["React Native", "Flutter"],
      features: ["Cross-platform apps", "Native development", "App store deployment"],
    },
  ]

  return (
    <section id="services" className="py-2 md:py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">End-to-end IT solutions for modern businesses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-100 hover:shadow-lg transition group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <Icon size={28} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-teal-700 mb-2">KEY FEATURES:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-emerald-200">
                  <div className="flex flex-wrap gap-2">
                    {service.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white text-teal-700 text-xs font-semibold rounded-full border border-emerald-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="mt-6 text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition group">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
