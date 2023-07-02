import React from 'react'
import { Github, LinkedIn, WhatsAppIcon } from '../svg/svg'
import Logo from './../../images/logo2.png'


const Footer = () => {
  return (
    <footer className="text-gray-600 body-font  bg-[rgb(40,49,64)] ">
  <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
    <a  href='/home' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img src={Logo} alt="Logo" width={32} height={32} className='contrast-150' />
      <span className="ml-3 text-xl text-gray-200">Portfolio</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">© 2023 Portfolio —
      <p className="text-gray-500 ml-1">@surajsingh</p>
    </p>

    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start hover:text-gray-200 text-sm" >
      <a href='https://github.com/sDEV-eloper' className="ml-3 text-gray-500  underline hover:text-gray-200 " target='_blank' rel="noreferrer">
   <p>Github</p>
      </a>
      <a href='https://wa.me/9528394139/' className="ml-3 text-gray-500 underline hover:text-gray-200 " target='_blank' rel="noreferrer">
<p>WhatsApp</p>
      </a>
      <a href='https://www.linkedin.com/in/surajsingh09/' className="ml-3 text-gray-500 underline hover:text-gray-200 " target='_blank' rel="noreferrer">
     <p>LinkedIn</p>
      </a>
    </span>
  </div>

</footer>
  )
}

export default Footer