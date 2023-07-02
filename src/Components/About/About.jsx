import React from 'react'
import { Education, Interest } from './Education'

const About = () => {
  return (
   
<section id="About"  className="text-gray-600  body-font  pt-12">
    <h1 className='text-5xl font-bold text-center'>About Me</h1>

  <div className="container px-5 py-10 mx-auto ">
    <h1 className='text-4xl font-bold text-center text-slate-600 mb-6 underline'>Education</h1>
    
    <div className="flex flex-wrap  ">
      {Education.map((item)=>{
        return(
      <div className="lg:w-96 p-4 flex ml-auto mr-auto  bg-gray-200 rounded-tl-2xl rounded-br-2xl">
        {/* <div className="h-full flex items-start "> */}
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none ">
              <img alt="certificate" src="https://img.icons8.com/?size=512&id=3XvNk4jVfr3m&format=png" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>  
          </div>
          <div className="flex-grow pl-6 flex-row justify-center">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{item.title}</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{item.course}</h1>
            <p className="leading-relaxed ">{item.institution}</p>
            <span className="inline-flex items-center">
              <span className="flex-grow ">
                <span className="title-font font-medium text-gray-900">{item.date}</span>
              </span>
            </span>
          </div>
        {/* </div> */}
      </div>
          )
      })}

    </div>
  </div>

  <section className="text-gray-600 body-font border-t-2 border-b-2  border-gray-200 w-1/2 ml-auto mr-auto">
  {/* <div className="container px-5 py-10 mx-auto"> */}
   <h1 className='text-3xl font-bold text-center bg-gray-100' >Interest</h1>
    <div className="flex flex-wrap m-5">
      {Interest.map((item)=>{
      return (
      // <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 rounded-lg flex justify-between ml-auto mr-auto flex-col">
          <img className="h-[80px] rounded w-full  object-center contain mb-2" src={item.img} alt="content"/>
          <h2 className="text-sm text-gray-900 font-medium title-font text-center">{item.name} </h2>
</div>
      // </div>
      )
      }
      )}
    </div>
  {/* </div> */}
</section>

</section>

  )
}

export default About