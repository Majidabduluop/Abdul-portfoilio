// import profile from "../assets/profile.jpg";
const Landingpage = () => {
  return (
    <>
      {/* <div className="position absolute top-1.5 left-4">
        <Avatar
          src={profile}
          alt="it's me"
          size={65}
          className="rounded-full ring-1 ring-blue-500 shadow-lg bg-white p-[2px] transition-transform duration-300 ease-in-out hover:scale-110"
          sx={{
            objectFit: "cover",
          }}
        />
      </div> */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative "
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Abdul Majid
          </h1>

          <p className="text-white text-lg mb-8 max-w-lg mx-auto">
            I'm a full-stack developer passionate about creating clean, scalable
            web applications. My aim is to develop solutions that deliver
            outstanding performance while providing a seamless and enjoyable
            user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landingpage;
