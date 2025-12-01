export default function TrustedTech() {
  const techs = [".Net Core", "Next.js", "Azure DevOps", "TypeScript", "SQL Server", "Docker"]

  return (
    <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50 border-y border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 font-semibold mb-8">TRUSTED TECHNOLOGIES:</p>

        <div className="flex flex-wrap justify-center gap-6">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white rounded-lg border border-emerald-200 shadow-sm hover:shadow-md transition"
            >
              <span className="text-gray-700 font-semibold">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
