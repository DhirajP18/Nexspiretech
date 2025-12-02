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
    <section className="py-1 bg-gradient-to-r from-emerald-30 to-teal-30 border-y border-emerald-200">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-600 font-semibold mb-10 tracking-wide">
          TRUSTED TECHNOLOGIES:
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg 
                         border border-emerald-300 shadow-sm hover:shadow-md 
                         transition-all hover:scale-105"
            >
              <img src={tech.logo} alt={tech.name} className="w-12 h-18 object-contain" />
              <span className="text-gray-800 font-medium text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
