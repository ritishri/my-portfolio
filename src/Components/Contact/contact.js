import React, { useRef } from 'react';
import facebook from '../../images/facebook.jpeg';
import insta from '../../images/insta.jpeg';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_11cw838', 'template_vk0ebwj', form.current, 'I2T_8LkayaEem-4Mo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="text-gray-600 contact bg-green-200 max-w-7xl ml-20 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Me</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please fill out the form below to discuss any work opportunity.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="your_name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="your_email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" className="flex mx-auto text-white bg-green-400 border-0 py-2 px-8 focus:outline-none bg-green-600 active:bg-green-200 rounded text-lg">Submit</button>
              </div>
            </div>
          </form>
          <div className="flex mx-auto justify-center mt-9">
            <a href="https://www.instagram.com/ritishriwastva/" target="_blank" rel="noopener noreferrer">
              <img className="h-10 w-10 mr-4" src={insta}  alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/ritika.shrivastava.52090" target="_blank" rel="noopener noreferrer">
              <img className="h-10 w-10" src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
