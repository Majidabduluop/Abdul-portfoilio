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
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Enthusiastic developer skilled in crafting scalable web applications
            and designing creative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong> B.S. in Computer Science </strong> National University
                of Modern Language (2016-2020)
              </li>
              <li>
                <strong> Master's in Cyber Security </strong> University of
                Portsmouth (2021-2022)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  {" "}
                  Full Stack Developer at Insitech (2022 - 2024){" "}
                </h4>
                <p>
                  Built scalable APIs with Spring Boot and MongoDB, implementing
                  JWT authentication. Developed dynamic UIs with React, Next.js,
                  and Redux for seamless backend integration.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  {" "}
                  React Developer at CapregSoft Limited (2019 - 2021){" "}
                </h4>
                <p>
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
