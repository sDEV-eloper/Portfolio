import React from 'react';
import { skillsList as skills } from './constants';

const Skills = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div className="bg-white p-4 rounded-lg shadow-md" key={index}>
            <div className="text-xl font-bold mb-2">{skill.name}</div>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
