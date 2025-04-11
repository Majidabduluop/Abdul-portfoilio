import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Avatar } from "@mantine/core";
import profile from "../assets/profile.jpg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b border-white/10 ${
        scrolled ? "bg-gray-900 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="position absolute top-1.5 left-4">
        <Avatar
          src={profile}
          alt="it's me"
          size={65}
          className="rounded-full ring-1 ring-blue-500 shadow-lg bg-white p-[2px] transition-transform duration-300 ease-in-out hover:scale-110"
          sx={{
            objectFit: "cover",
          }}
        />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
