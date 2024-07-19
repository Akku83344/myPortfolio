import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center py-6 m-0">
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/akanksha-gupta-27269a232/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Akku83344" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/i_okko_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com/Akanksh67309877" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
