import React from 'react'
import BoyImg from './../../images/boy2.png'

const HomeDefault = () => {
  return (
 
    <section className="bg-gradient-to-tl from-gray-700 via-gray-900 to-black text-gray-100 py-20 h-[100vh] caret-transparent ">
      <div className="container mx-auto h-full flex items-center">
        <div className="text-center ml-16">
          <h1 className="text-6xl font-bold animate-jump-in animate-once ">
            Hi👋, My Name is
          </h1>
          <h1 className="text-6xl font-bold my-6 animate-jump-in animate-once animate-delay-[300ms]">
            <span className="bg-gradient-to-r from-[#ff8a05] via-[#ff5478] to-[#ff00c6] bg-clip-text text-transparent">
              SURAJ SINGH
            </span>
          </h1>
          <p className="mt-4 text-3xl text-yellow-500 font-bold  animate-jump-in animate-once animate-delay-[600ms]">
           "Frontend Developer"
          </p>
          <button className="my-8 animate-fade-up animate-once animate-duration-[1000ms] animate-delay-[1500ms]">
            <a
              href="#_"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Download CV</span>
              </span>
            </a>
          </button>
        </div>
        <div className="absolute top-0 right-0 h-full">
          <img
            src={BoyImg}
            alt="boy"
            className="h-full rounded-full"
          />
        </div>
      </div>
      
    </section>
  );
}

export default HomeDefault