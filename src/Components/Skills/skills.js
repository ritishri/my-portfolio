import React from 'react';

function Skills() {
  return (
    <section className='skills max-w-7xl ml-20 flex flex-col  items-center p-8 bg-green-200'>
      <span className='text-2xl font-bold mb-4'>What I Do</span>
      <span className='text-center text-2xl mb-8'>
        I am a dynamic and ambitious fresher with a solid foundation in web development. My expertise lies in crafting responsive and user-friendly interfaces using the MERN stack - MongoDB, Express.js, React.js, and Node.js. I'm well-versed in HTML, CSS, and JavaScript.
      </span>
      <div className=' flex flex-col  gap-8'>
        <div className='p-4 border border-gray-200 bg-green-400 rounded'>
          <h1 className='text-xl font-bold mb-2 '>Frontend Development</h1>
          <p>Bringing designs to life with a combination of HTML, CSS, and JavaScript. I'm passionate about creating visually appealing and responsive user interfaces.</p> 
        </div>
        <div className='p-4 border border-gray-200  bg-green-400 rounded'>
          <h1 className='text-xl font-bold mb-2'>Backend Development</h1>
          <p>Familiar with Node.js and Express.js for server-side development, ensuring seamless integration with frontend components. Have a knack for designing robust and scalable APIs.</p>
        </div>
        <div className='p-4 border border-gray-200  bg-green-400 rounded'>
          <h1 className='text-xl font-bold mb-2'>Database Management</h1>
          <p>Knowledgeable in MongoDB, adept at designing and implementing database structures to support application requirements.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
