import { useState, useEffect } from "react";
import Logo from "../assets/images/logosafari.png";

const Navbar = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past threshold
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-26 flex-row justify-center items-center right-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md z-[80]" : "bg-transparent z-40"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* <div className="relative h-28"> */}
      <div className={`relative ${isScrolled ? "h-26" : "h-28"}`}>
        {/* Geometric Background Shapes - Only visible when not scrolled */}
        {!isScrolled && (
          <>
            {/* Center White Angled Section */}
            {/* <div className="absolute w-72 -left-10 lg:left-32 top-0 w-2/5 h-full bg-white clip-center-trapezoid"></div> */}
            <div className="absolute w-72 -left-10 lg:left-32 top-0 w-2/5 h-full clip-center-trapezoid flex items-center justify-center bg-white">
              <img
                src={Logo}
                alt="Logo Safari"
                className="h-20 object-contain"
              />
            </div>
          </>
        )}

        {/* Navbar Content */}
        <div
          className={`relative px-4 md:px-6 h-28 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "py-4 bg-[#FDF0DC]" : "py-4"
          }`}
        >
          {/* Left Section - Logo (always visible) */}
          <div className="flex items-center space-x-4 z-10">
            {/* Logo */}
            <div className="flex items-center ml-28">
              {/* <div className="absolute w-72 -left-10 lg:left-32 top-0 w-2/5 h-full clip-center-trapezoid flex items-center justify-center bg-white"> */}
              <div
                className={` ${
                  isScrolled
                    ? "absolute w-[400px] -left-10 top-0 w-2/5 h-full clip-center-trapezoid flex items-center justify-center bg-white"
                    : ""
                }`}
              >
                <img
                  src={Logo}
                  alt="Asili Explorer"
                  className={`transition-all duration-300 ${
                    isScrolled ? "h-20" : "hidden"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Center Section - Reference Number (only on lg+ when not scrolled) */}
          {/* {!isScrolled && (
            <div className="hidden lg:flex flex-col items-start z-10">
              <span
                className={`text-sm ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Reference Number
              </span>
              <p className="text-white font-semibold text-lg">#2025-1837.3</p>
            </div>
          )} */}
          <div className="hidden -ml-20 lg:flex flex-col items-start  z-10">
            <span
              className={`text-sm ${isScrolled ? "text-black" : "text-white"}`}
            >
              Reference Number
            </span>

            <p
              className={`font-semibold text-lg ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              #2025-1837.3
            </p>
          </div>

          {/* Right Section - Desktop (lg+) */}
          <div className="hidden  lg:flex items-center space-x-3 md:space-x-5 lg:space-x-10 z-10">
            {/* Total Price */}
            <div
              className={`text-right ${isScrolled ? "hidden md:block" : ""}`}
            >
              <p
                className={`text-sm font-light ${
                  isScrolled ? "text-gray-600" : "text-white"
                }`}
              >
                Total Price
              </p>
              <p
                className={`text-lg font-bold ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                USD $7,908.00
              </p>
            </div>

            {/* Price Details Button */}
            <button
              className={`px-4 py-2 rounded transition-colors ${
                isScrolled
                  ? "bg-white border border-gray-300 text-gray-800 hover:bg-gray-50"
                  : "bg-orange-100 text-gray-800 hover:bg-white border border-orange-200"
              }`}
            >
              Price Details
            </button>

            {/* You Confirmed Badge */}
            <div className="flex items-center space-x-2 px-3 md:px-4 py-2 rounded transition-colors">
              <svg
                // className="w-5 h-5 text-white"
                className={`font-semibold w-5 h-5 text-sm md:text-base ${
                  isScrolled ? "text-[#EF9716]" : "text-white"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {/* <span className="font-semibold text-white text-sm md:text-base"> */}
              <span
                className={`font-semibold text-sm md:text-base ${
                  isScrolled ? "text-[#EF9716]" : "text-white"
                }`}
              >
                You Confirmed
              </span>
            </div>
          </div>

          {/* Mobile Menu Button (below lg) */}
          <div className="lg:hidden z-999">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-black" : "text-black"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (below lg) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-0 pt-12 left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-4 py-6 space-y-4">
              {/* Reference Number */}
              <div className="">
                <span className="text-sm text-gray-600 font-light">
                  Reference Number
                </span>
                <p className="text-gray-800 font-semibold">#2025-1837.3</p>
              </div>

              {/* Total Price */}
              <div>
                <p className="text-sm font-light text-gray-600">Total Price</p>
                <p className="text-lg font-bold text-gray-800">USD $7,908.00</p>
              </div>

              {/* Price Details Button */}
              <button className="w-full px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
                Price Details
              </button>

              {/* You Confirmed Badge */}
              <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-50 rounded">
                <svg
                  className="w-5 h-5 text-green-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold text-green-700">
                  You Confirmed
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for clipping paths */}
      <style>{`
        .clip-left-trapezoid {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
        }
        .clip-center-trapezoid {
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
        }
        .clip-right-trapezoid {
          clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
