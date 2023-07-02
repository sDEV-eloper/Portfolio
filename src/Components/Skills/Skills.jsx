import React from 'react';
import { skillsList as skills } from './constants';
import HorizontalMarquee from './HorizontalMarquee';

const Skills = () => {
  return (
    <section id='Skills' className='bg-gray-900'>
      <h2 className="text-4xl font-bold py-12 text-center text-gray-100">Skills</h2>
      <div className="flex justify-center pb-10">
         <HorizontalMarquee row={skills}/>
        </div>
    </section>
  );
};

export default Skills;
