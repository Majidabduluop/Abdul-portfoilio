import Contact from "./Contact";

const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "Next.js",
    "TailwindCSS",
    "Mantine",
    "Material UI",
    "Bootstrap",
    "HTML",
    "TypeScript",
    "JavaScript",
  ];

  const backendSkills = [
    "Spring Boot",
    "Java",
    "AWS",
    "MongoDB",
    "Docker",
    "Spring Security",
    "JWT",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-10 sm:py-42">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-4 sm:p-6 md:p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
            Enthusiastic developer skilled in crafting scalable web applications
            and designing creative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-gray-200 text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-gray-200 text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
          <div className="p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              🏫 Education
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
              <li>
                <strong>B.S. in Computer Science</strong>
                <br className="sm:hidden" />
                <span className="text-xs sm:text-sm">
                  {" "}
                  National University of Modern Language (2016-2020)
                </span>
              </li>
              <li>
                <strong>Master's in Cyber Security</strong>
                <br className="sm:hidden" />
                <span className="text-xs sm:text-sm">
                  {" "}
                  University of Portsmouth (2021-2022)
                </span>
              </li>
            </ul>
          </div>

          <div className="p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              💼 Work Experience
            </h3>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <div>
                <h4 className="font-semibold text-sm sm:text-base">
                  React Developer at CapregSoft Limited (2022 - 2024)
                </h4>
                <p className="text-xs sm:text-sm mt-1">
                  Developed user interfaces with React.js and Next.js,
                  converting design mockups into interactive components.
                  Implemented state management using Redux toolkit and Context
                  API, with version control via Git/GitHub
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
