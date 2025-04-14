import Contact from "./Contact";

const Projects = () => {
  const project = [
    {
      projectname: "Movie streaming website",
      skills: "React, Tailwind, HTML, RESTful API Integration",
      link: "https://movieswebsite-lemon.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      projectname: "E-commerce website",
      skills: "React, Tailwind, HTML, Redux toolkit",
      link: "https://shopping-store-umber.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1607082349566-187342175e2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      projectname: "File Sharing App",
      skills: "React, Tailwind, HTML, Redux toolkit, Firebase",
      link: "https://files-sharing-lac.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      projectname: "Online course website",
      skills: "React, HTML, CSS, Bootstrap",
      link: "https://onlinecourses-eight.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      projectname: "JOb Portal",
      skills:
        "React, HTML, Tailwind CSS, Mantine, CI/CD, Java, Spring Boot, MongoDB, Spring Security, Maven, RESTful APIs, GitHub",
      link: "https://job-portal-w1e8.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {project.map((item, key) => (
            <div
              key={key}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-black/30 hover:backdrop-blur-md hover:border-blue-500/20 transition-all duration-300 group"
            >
              <div className="relative h-40 sm:h-48 md:h-32 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.projectname}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-white/90">
                  {item.projectname}
                </h3>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {item.skills.split(", ").map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/10 text-blue-400 py-0.5 sm:py-1 px-2 sm:px-3 rounded-full text-xs hover:bg-blue-500/20 hover:text-blue-300 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  target="_blank"
                  href={item.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm group-hover:translate-x-1"
                >
                  View Project
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
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
