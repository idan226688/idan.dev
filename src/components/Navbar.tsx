
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-terminal-dark/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              className="text-terminal-green font-bold text-xl hover:text-glow"
            >
              &lt;idan.hadad/&gt;
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-terminal-green hover:text-glow"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-5 bg-terminal-dark/95 backdrop-blur-md border-t border-terminal-muted/30 flex flex-col space-y-6">
            <NavLinks mobile closeMenu={() => setMobileMenuOpen(false)} />
            <div className="flex justify-center space-x-6 pt-4 border-t border-terminal-muted/30">
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false, closeMenu = () => {} }) => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`${
        mobile ? "flex flex-col space-y-4" : "flex items-center space-x-6"
      }`}
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={closeMenu}
          className={`text-sm hover:text-terminal-green transition-colors ${
            mobile
              ? "text-terminal-green hover:text-glow text-center py-2"
              : "text-gray-300"
          }`}
        >
          {mobile ? link.name : link.name}
        </a>
      ))}
    </div>
  );
};

const SocialLinks = () => {
  const socials = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/idan226688",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/idan-hadad-8793a2249/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:idan226688@gmail.com",
      label: "Email",
    },
  ];

  return (
    <>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-terminal-green transition-colors"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </>
  );
};

export default Navbar;
