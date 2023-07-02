import React from 'react'

const About = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p className="mb-4">
              I have a Bachelor's degree in Computer Science from XYZ University. During my studies, I focused on web development and frontend technologies. I gained a solid foundation in HTML, CSS, JavaScript, and other frontend frameworks like React and Angular.
            </p>
            <p>
              I am constantly learning and keeping up with the latest trends in frontend development. I enjoy attending web development conferences and taking online courses to enhance my skills.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h3 className="text-xl font-bold mb-2">Hobbies</h3>
            <p className="mb-4">
              Apart from coding, I have a passion for photography. I love capturing moments and expressing my creativity through visual storytelling. You can often find me exploring new places with my camera, looking for the perfect shot.
            </p>
            <p>
              I also enjoy hiking and being close to nature. It helps me find inspiration and maintain a healthy work-life balance. Exploring new trails and challenging myself physically is something I truly enjoy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About