


import React, { useState } from 'react';
import image1 from '../../images/movie1.jpeg';
import image2 from '../../images/passwords.jpg';
import image3 from '../../images/file.jpeg';


function Work() {
  const githubUrls = [
    'https://github.com/ritishri/CinePhile',
    'https://github.com/ritishri/Password-Generator',
    'https://github.com/ritishri/File-Sharing'
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (index) => {
    window.open(githubUrls[index], '_blank');
  };

  return (
    <section className="work max-w-7xl ml-20 text-center my-8">
      <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
      <p className="text-gray-600 mb-8">
        Embark on a journey through my web development portfolio, where every project is a testament to my passion for crafting immersive online experiences. From responsive websites to dynamic web applications, explore the intersection of design and functionality.
      </p>
      <div className="flex flex-wrap justify-center">
        <img
          src={image1}
          className="h-48 w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 border-solid border-2 border-green-600 m-5"
          alt="Project 1"
          onClick={() => handleClick(0)}
        />
        <img
          src={image2}
          className="h-48 w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 border-solid border-2 border-green-600 m-5"
          alt="Project 2"
          onClick={() => handleClick(1)}
        />
        <img
          src={image3}
          className="h-48 w-48 md:h-200 md:w-60 lg:h-72 lg:w-72 border-solid border-2 border-green-600 m-5"
          alt="Project 3"
          onClick={() => handleClick(2)}
        />
      </div>
    </section>
  );
}

export default Work;

