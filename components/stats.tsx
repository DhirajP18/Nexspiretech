export default function Stats() {
  const stats = [
    { value: "50+", label: "Clients" },
    { value: "98%", label: "Satisfaction" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="py-4 bg-gradient-to-b from-emerald-50/60 to-teal-50/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                group 
                flex flex-col items-center 
                p-6 
                rounded-3xl 
                backdrop-blur-md 
                bg-emerald-50/40 
                border border-emerald-300 
                shadow-[0_0_15px_rgba(52,211,153,0.25)]
                transition-all duration-300 
                hover:scale-105 
                hover:shadow-[0_0_25px_rgba(52,211,153,0.45)]
                hover:bg-emerald-100/50
                animate-fade-in
              "
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Circle icon */}
              <div
                className="
                  w-20 h-20 rounded-full 
                  bg-gradient-to-br from-emerald-600 to-teal-600 
                  flex items-center justify-center 
                  mb-3
                  shadow-lg
                  group-hover:shadow-emerald-400/60
                  transition-all duration-300
                "
              >
                <span className="text-3xl font-bold text-white">
                  {stat.value}
                </span>
              </div>

              {/* Label */}
              <p className="text-gray-800 font-semibold text-lg tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
