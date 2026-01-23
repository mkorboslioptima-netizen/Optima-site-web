import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const menuData = [
  {
    title: "Home",
    subMenu: [
      { title: "Digital Marketing", href: "" },
      { title: "SEO Agency", href: "/home-two" },
      { title: "Creative Agency", href: "/home-three" },
      { title: "AI Software", href: "/home-four" },
      { title: "Business Consulting", href: "/home-five" },
      { title: "ELearning", href: "/home-six" },
      { title: "IT Business", href: "/home-seven" },
      { title: "Saas", href: "/home-eight" },
      { title: "App Landing", href: "/home-nine" },
      { title: "Personal Portfolio", href: "/home-ten" },
    ],
  },
  { title: "Company", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Blogs", href: "/blogs" },
  {
    title: "Pages",
    subMenu: [
      { title: "Projects", href: "/projects" },
      { title: "Projects Details", href: "/project-details/" },
      { title: "Service Details", href: "/service-details" },
      { title: "Blog Details", href: "/blog-details" },
      { title: "Team Members", href: "/teams" },
      { title: "FAQ's", href: "/faqs" },
      { title: "Pricing", href: "/pricing" },
      { title: "Course Details", href: "/course-details" },
      { title: "Cart", href: "/cart" },
      { title: "Checkout", href: "/checkout" },
      { title: "Not Found", href: "/notfound" },
    ],
  },
  { title: "Contact", href: "contact" },
];

const MobileHeader = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState(null);
  const navRef = useRef(null);
  const overlayRef = useRef(null);
  const toggleMenuRef = useRef(null);

  const toggleNav = () => {
    setIsNavActive((prev) => !prev);
  };

  const toggleSubNav = (index) => {
    setActiveSubNav((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleOverlayClick = () => {
      setIsNavActive(false);
    };

    if (overlayRef.current) {
      overlayRef.current.addEventListener("click", handleOverlayClick);
    }

    return () => {
      if (overlayRef.current) {
        overlayRef.current.removeEventListener("click", handleOverlayClick);
      }
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setIsNavActive(false);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="relative flex flex-col xl:hidden">
      <div className="h-16 bg-white flex items-center justify-between fixed top-0 left-0 z-50 w-full px-2.5">
        <Link href="/" aria-label="logo">
          <img src="/assets/images/home-two/logo.svg" alt="logo" />
        </Link>
        <button
          aria-label="mobile-Menu"
          className="w-6 h-6 text-main-black text-48 toggle_nav_menu"
          id="mobile_nav_toggle_menu"
          onClick={toggleNav}
        >
          <svg
            className={`transition-all duration-300 pointer-events-none ${
              isNavActive ? "hidden" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32-14.3 32 32z" />
          </svg>
          <svg
            className={`transition-all duration-300 pointer-events-none ${
              isNavActive ? "" : "hidden"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
      <div className="transition-all duration-300">
        <div
          className={`fixed z-40 w-full h-screen transition-all duration-300 delay-150 bg-black/80 ${
            isNavActive ? "left-0" : "-left-full"
          }`}
          id="mobile-nav-div-overlay"
          ref={overlayRef}
        ></div>
        <div
          className={`fixed z-50 w-full h-screen overflow-y-scroll transition-all duration-300 bg-white top-16 ${
            isNavActive ? "left-0" : "-left-full"
          }`}
          id="mobile-nav-div"
          ref={navRef}
        >
          <div className="flex flex-col pt-5 pl-5 gap-28">
            <ul className="flex flex-col gap-5 text-base font-medium leading-5 text-paragraph font-inter">
              {menuData.map((menuItem, index) => (
                <li key={index} className="group">
                  {menuItem.subMenu ? (
                    <>
                      <button
                        className="relative flex items-center gap-2 leading-5 home-two-nav-item w-fit m-nav-dropdown"
                        onClick={() => toggleSubNav(index)}
                      >
                        {menuItem.title}
                        <svg
                          className="pointer-events-none"
                          width="10"
                          height="10"
                          viewBox="0 0 19 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2L9.5 8L17 2"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <ul
                        className={`overflow-hidden transition-all font-medium h-[150px] duration-300 pl-5 pt-4 ${
                          activeSubNav === index ? "" : "mobile-sub-nav"
                        }`}
                      >
                        {menuItem.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="relative py-1">
                            <a
                              className="relative py-1 font-medium leading-5 home-two-nav-item hover:text-purple w-fit"
                              href={subItem.href}
                            >
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a
                      className="relative home-two-nav-item w-fit"
                      href={menuItem.href}
                    >
                      {menuItem.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 pl-5 mt-5">
            <a href="#" className="flex gap-2.5 group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                  stroke="#5D51F2"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 5L12 5M22 5C22 4.43982 20.604 3.39322 20.25 3M22 5C22 5.56018 20.604 6.60678 20.25 7M12 5C12 4.43982 13.396 3.39322 13.75 3M12 5C12 5.56018 13.396 6.60678 13.75 7"
                  stroke="#5D51F2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base font-bold leading-5 tracking-tight text-main-black">
                Call : 000 (123) 456 88
              </span>
            </a>
            <Link href="/contact">
              <div className="home-two-btn-bg py-2.5 group bg-blue-seo border-blue-seo w-fit">
                <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-blue-seo font-inter">
                  Contact US
                </span>
                <svg
                  className="relative z-10"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-all duration-300 group-hover:stroke-blue-seo"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
