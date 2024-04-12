import React, { useState } from 'react';
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='h-64px mt-3 ml-2 mr-2 flex align-center justify-between sticky top-0 bg-white shadow-sm z-10'>
      <div className='text-2xl italic hover:not-italic font-semibold' style={{ width: '200px' }}>
        <span className='text-green-500 text-4xl'>Web</span>Flow
      </div>
      <div className={`hidden md:flex cursor-pointer menu text-xl ${isMenuOpen ? 'hidden' : ''}`} style={{ width: '400px' }}>
        <ScrollLink
          className='ml-9 hover:underline hover:text-green-300 active:text-green-600'
          to='intro'
          smooth={true}
          duration={500}
        >
          Home
        </ScrollLink>
        <ScrollLink
          className='ml-9 hover:underline hover:text-green-300 active:text-green-600'
          to='skills'
          smooth={true}
          duration={500}
          offset={-50}>
          About
        </ScrollLink>
        <ScrollLink
          className='ml-9 hover:underline hover:text-green-300 active:text-green-600'
          to='work'
          smooth={true}
          duration={500}
          offset={-50}>
          Portfolio
        </ScrollLink>
      </div>
      <div className='md:hidden cursor-pointer menu text-xl'>
        <button onClick={handleMenuToggle}>
          <span className='block w-6 h-1 bg-green-500 mb-1'></span>
          <span className='block w-6 h-1 bg-green-500 mb-1'></span>
          <span className='block w-6 h-1 bg-green-500'></span>
        </button>
        {isMenuOpen && (
          <div className='absolute top-16 left-0 right-0 bg-white shadow-md p-4' style={{ width: '200px' }}>
            <ScrollLink
              className='block mb-2 hover:underline hover:text-green-300 active:text-green-600'
              to='intro'
              smooth={true}
              duration={500}
              offset={-50}>
              Home
            </ScrollLink>
            <ScrollLink
              className='block mb-2 hover:underline hover:text-green-300 active:text-green-600'
              to='skills'
              smooth={true}
              duration={500}
              offset={-50}>
              About
            </ScrollLink>
            <ScrollLink
              className='block mb-2 hover:underline hover:text-green-300 active:text-green-600'
              to='work'
              smooth={true}
              duration={500}>
              Portfolio
            </ScrollLink>
          </div>
        )}
      </div>
      <ScrollLink
        className='cursor-pointer bg-green-200 rounded-2xl p-1 text-xl'
        to='contact'
        smooth={true}
        duration={500}
        offset={-50}>
        Contact
        <ContactlessOutlinedIcon className='m-1' />
      </ScrollLink>
    </nav>
  );
}

export default Navbar;




