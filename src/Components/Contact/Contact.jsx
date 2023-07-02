import React from 'react'
import { Github, Gmail, LinkedIn, WhatsAppIcon } from '../svg/svg'

const Contact = () => {
  return (
    
    <section className="text-gray-600 body-font relative bg-gradient-to-t from-gray-700 via-gray-900 to-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-5xl text-3xl  title-font mb-4 text-gray-100 font-bold">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed  text-gray-300 text-lg">Looking to collaborate, discuss a project, or simply have a chat? I would love to hear from you! Feel free to reach out using the contact details below or by filling out the form. Let's connect and create something amazing together.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-lg text-gray-100 " >Name</label>
                <input type="text" id="name" name="name" className="w-full bg-neutral-900 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200   ease-in-out placeholder:text-sm" placeholder='e.g Suraj Singh' required/>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-lg text-gray-100 " >Email</label>
                <input type="email" id="email" name="email" className="w-full bg-neutral-900 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-sm" placeholder='e.g. yourmail@mail.com' required/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="message" className="leading-7 text-lg text-gray-100 " >Message</label>
                <textarea id="message" name="message" className="w-full bg-neutral-900 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out placeholder:text-sm" placeholder='Type your message...' ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-indigo-500">thisissurajdev@gmail.com</a>
              <p className="leading-normal my-5 text-gray-400">Nainital, Uttarakhand, India
              </p>
              <span className="inline-flex">
                <a href='https://wa.me/9528394139/' className="text-gray-500"  target='_blank' rel="noreferrer">
                 <WhatsAppIcon/>
                </a>
                <a href='https://www.linkedin.com/in/surajsingh09/'  className="ml-4 text-gray-500"  target='_blank' rel="noreferrer">
                 <LinkedIn/>
                </a>
                <a href='https://github.com/sDEV-eloper' className="ml-4 text-gray-500"  target='_blank' rel="noreferrer">
                  <Github/>
                </a>
                <a className="ml-4 text-gray-500"  target='_blank' rel="noreferrer" href="mailto:thisissurajdev@gmail.com">
                  <Gmail/>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  )
}

export default Contact