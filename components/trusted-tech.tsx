export default function TrustedTech() {
  const techs = [
    { name: ".NET Core", logo: "/logos/dotnet.png" },
    { name: "Next.js", logo: "/logos/nextjs.png" },
    { name: "Azure DevOps", logo: "/logos/azuredevops.png" },
    { name: "Github", logo: "/logos/github.png" },
    { name: "SQL Server", logo: "/logos/sqlserver.png" },
    { name: "Docker", logo: "/logos/docker.png" }
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-emerald-50 to-teal-50 border-y border-emerald-200">
      <div className="max-w-7xl mx-auto px-4">
        
        <p className="text-center text-gray-600 font-semibold mb-6 tracking-wide">
          TRUSTED TECHNOLOGIES:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl 
                         border border-emerald-300 shadow-sm hover:shadow-md
                         transition-all hover:scale-105"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-gray-800 font-medium text-xs sm:text-sm text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
