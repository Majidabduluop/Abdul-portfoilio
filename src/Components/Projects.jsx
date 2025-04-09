import Contact from "./Contact";

const Projects = () => {
  const project = [
    {
      projectname: "Movie streaming website",
      skills: "React, Tailwind, HTML, RESTful API Integration",
      link: "https://movieswebsite-lemon.vercel.app/",
    },
    {
      projectname: "E-commerce website",
      skills: "React, Tailwind, HTML, Redux toolkit",
      link: "https://shopping-store-umber.vercel.app/",
    },
    {
      projectname: "File Sharing App",
      skills: "React, Tailwind, HTML, Redux toolkit, Firebase",
      link: "https://files-sharing-lac.vercel.app/  ",
    },
    {
      projectname: "Online course website",
      skills: "React, HTML, CSS, Bootstrap",
      link: "https://onlinecourses-eight.vercel.app/",
    },
    {
      projectname: "JOb Portal",
      skills:
        "React, HTML, Tailwind CSS, Mantine, CI/CD, Java, Spring Boot, MongoDB, Spring Security, Maven, RESTful APIs, GitHub",
      link: "https://job-portal-w1e8.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="p-6 px-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
          {project.map((item, key) => (
            <div key={key} className="mb-6">
              <li className="text-lg font-bold mb-2 text-gray-50">
                {item.projectname}
              </li>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.skills.split(", ").map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  target="_blank"
                  href={item.link}
                  className="text-blue-400 hover:text-white transition-colors my-4 text-lg"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
