import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 place-items-center">
          <div className="space-y-3 sm:space-y-4 text-center md:text-left w-full">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Contact Me
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:abdulmajid6853@gmail.com"
                className="flex items-center justify-center md:justify-start text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
              >
                <FaEnvelope className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                abdulmajid6853@gmail.com
              </a>
              <a
                href="tel:+16674458148"
                className="flex items-center justify-center md:justify-start text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
              >
                <FaPhone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                +1 6674458148
              </a>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 text-center w-full">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Follow Me
            </h3>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a
                href="https://www.linkedin.com/in/abdul-majid-9115082b7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://github.com/Majidabduluop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://x.com/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 text-center w-full">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href="#home"
                className="block text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="block text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Abdul Majid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
