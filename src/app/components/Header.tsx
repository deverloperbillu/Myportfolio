'use client'
import React, { useCallback, useEffect, useState  } from 'react'
import { usePathname } from 'next/navigation';
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle mobile menu
  };

const pathname = usePathname();
const toggleBodyClass = useCallback(() => {
    if(pathname == '/'){
        document.body.classList.add('home');
    }else{
        document.body.classList.remove('home');
    }
}, [pathname]);

useEffect (() => {
    toggleBodyClass();
}, [toggleBodyClass]);

  return (
    <>
      <header className='absolute top-0 left-0 w-full mt-6 z-10'>
          <div className='container mx-auto max-w-7xl'>
              <div className='main_header flex items-center justify-between'>
                  <div className='site_log block'>
                      <Link href='/'><h1 className='text-lg'>Syed Bilal Shahid</h1></Link>
                  </div>
                  <div className='cst_menu flex items-center justify-end space-x-6'>
                      <div className='main_menu'>
                          <ul className='list-insidelist-none p-0 inline-flex space-x-4 text-[#c4cfde] text-sm uppercase'>
                              <li><Link href="/">Home</Link></li>
                              <li><Link href="/about">About Us</Link></li>
                              <li><Link href="/services">Services</Link></li>
                              <li><Link href="/portfolio">Portfolios</Link></li>
                              <li><Link href="/contact">Contact Us</Link></li>
                          </ul>
                      </div>
                      <div className='book_btn'>
                          <button className='text-sm text-[#ff014f] px-5 py-4 relative z-10 font-medium uppercase'>Book a Call</button>
                      </div>
                  </div>
              </div>
          </div>
      </header>
      <div className='mobileheader'>
        <div className="container mx-auto px-4 lg:px-10 py-4 flex items-center justify-between">
          <div className='branding_logo block'>
              <Link href='/'><h1 className='text-lg'>Syed Bilal Shahid</h1></Link>
          </div>
          <div className="lg:hidden">
          <button
            className="text-3xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
          <nav
            className={`${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0 absolute lg:static left-0 top-0 w-3/4 lg:w-auto bg-[#0d1117] lg:bg-transparent transition-transform duration-300 ease-in-out z-40`}
          >
            <div className='mobile_menuheader'>
              <Link href='/'><h1 className='text-lg'>Syed Bilal Shahid</h1></Link>
            </div>
            <div className='mobilemenu_bar'>
            <ul>
              <li>
                <Link href="/" className="hover:text-[#ff014f]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#ff014f]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ff014f]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#ff014f]">
                  Portfolios
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ff014f]">
                  Contact Us
                </Link>
              </li>
            </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header