const Landingpage = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center relative gap-8 md:gap-16 lg:gap-32 px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      >
        <div className="text-center md:text-left z-10 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Abdul Majid
          </h1>

          <p className="text-white text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
            I'm a full-stack developer passionate about creating clean, scalable
            web applications. My aim is to develop solutions that deliver
            outstanding performance while providing a seamless and enjoyable
            user experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-gray-50 py-2.5 sm:py-3 px-4 sm:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] text-sm sm:text-base"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-2.5 sm:py-3 px-4 sm:px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex flex-col border border-amber-50/20 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-black/30 hover:backdrop-blur-md transition-all duration-300 w-full max-w-xs sm:max-w-sm">
          <h3 className="text-white text-sm sm:text-base font-semibold mb-1 sm:mb-2">
            My Resume
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
            Download my professional resume
          </p>
          <a
              href="/AbdulMajidresume.pdf"
            download
            className="bg-blue-400/20 hover:bg-blue-400/30 text-blue-400 py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium hover:text-blue-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]"
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default Landingpage;
