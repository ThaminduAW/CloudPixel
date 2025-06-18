import React from "react";
import logo from "../assets/logo.png";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header at the top of the page
      if (currentScrollY <= 100) {
        setIsVisible(true);
      } else {
        // Hide header when scrolling down, show when scrolling up
        setIsVisible(currentScrollY < lastScrollY);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`bg-[#ffffff] shadow-lg w-full z-50 fixed top-0 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 flex items-center justify-between py-4 md:py-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 ml-10" aria-label="logo">
          <img src={logo} alt="CloudPixel Logo" className="w-28 max-h-12 object-contain drop-shadow-lg scale-450" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-10">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-black relative group px-2 py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#383838] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-md text-gray-300 hover:bg-[#23263a] focus:outline-none focus:ring-2 focus:ring-[#7F8CFF]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#ffffff] px-4 pb-4 pt-2 shadow-md animate-fade-in-down">
          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-black relative group px-2 py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#383838] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
