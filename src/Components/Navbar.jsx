import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex ml-18 p-6  ">
        <div className=" left-14 font-bold font-mono text-lg">
          <span className="text-white">Abdul</span>
          <span className="text-blue-700">.portfolio</span>
        </div>
        <div className="absolute  right-28 flex gap-12 text-lg text-gray-300">
          <div className="hover:text-blue-400">
            <Link to="/">Home</Link>
          </div>
          <div className="hover:text-blue-400">
            <Link to="about">About</Link>
          </div>
          <div className="hover:text-blue-400">
            <Link to="projects">Projects</Link>
          </div>
          <div className="hover:text-blue-400">
            <Link to="contact">Contacts</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
