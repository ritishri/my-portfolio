import React from 'react';
import bgImg from '../../images/content.jpeg';
import { Link } from 'react-scroll';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

function Intro() {
  return (
    <section className='intro ml-5 md:ml-10 lg:ml-20 max-w-7xl mx-auto my-9 relative flex flex-col md:flex-row items-center z-1'>
      <div className='w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0 md:pr-6 lg:pr-12'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold mb-2'>Hiii!</h1>
        <h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold mb-2'>I am <span className='text-green-500'>Ritika</span></h2>
        <p className='mb-4'>
          An aspiring web developer with a passion for creating amazing online experiences. I recently embarked on my journey into the world of web development and I'm eager to learn, grow, and make a mark in the digital realm.
        </p>
        <Link to='contact' smooth={true} duration={500}>
          <button className='bg-green-200 text-black rounded-2xl p-2 text-xl flex items-center'>
            <LockRoundedIcon />
            Hire Me
          </button>
        </Link>
      </div>
      <div className='w-full md:w-1/2 lg:w-1/2 px-4'>
        <img className='w-full object-cover' src={bgImg} alt='' />
      </div>
    </section>
  );
}

export default Intro;

