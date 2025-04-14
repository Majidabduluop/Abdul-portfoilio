const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-10 md:py-32 sm:py-20"
    >
      <div className="w-full max-w-md mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>
        <form className="space-y-4 sm:space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder:text-gray-400"
              placeholder="Name..."
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder:text-gray-400"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder:text-gray-400 resize-none"
              placeholder="Your Message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
