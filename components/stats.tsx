export default function Stats() {
  const stats = [
    { value: "50+", label: "Clients" },
    { value: "98%", label: "Satisfaction" },
    { value: "24/7", label: "Support" },
  ]

  return (
    <section className="py-8 md:py-12">   {/* reduced padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* reduced gap */}
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center mb-3">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-gray-700 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
