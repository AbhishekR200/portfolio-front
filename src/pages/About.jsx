import React from 'react'

function About() {
  return (
    <div>
       
         {/* projects */}


         
         <div className='cont1'>
          <h1 className='what'>WHAT I DO,</h1>
          <p className='p1'>As a web developer, I specialize in creating responsive and interactive websites using HTML, CSS, and JavaScript, leveraging frameworks and libraries such as React, Angular. My expertise extends to back-end development, where I build and maintain server-side applications with Node.js utilizing frameworks like Express and Laravel. As a full-stack developer, I integrate front-end interfaces with back-end services and APIs to deliver comprehensive web applications.Here are some elements you could include:
          </p>
            <ul className='text'>
              <li>
              Front-End Development:

Creating responsive and interactive websites using HTML, CSS, and JavaScript.
Expertise in frameworks and libraries like React, Angular.Proficiency in CSS preprocessors .

              </li>
              <li>
              Back-End Development:

Building and maintaining server-side applications using languages like Node.js, Python, Ruby, or PHP.
Experience with frameworks such as Express.
Database management using SQL (MySQL) or NoSQL (MongoDB) databases
              </li>
              <li>
              Full-Stack Development:

Combining front-end and back-end skills to create complete web applications.
Integration of front-end interfaces with back-end services and APIs.
              </li>
              <li>
              Web Design:

Designing user-friendly and visually appealing web interfaces.
Proficiency in design tools like Figma.
Knowledge of UI principles and best practices.
              </li>
              <li>
              API Development and Integration:

Creating and integrating RESTful or GraphQL APIs.
Working with third-party APIs for services like social media, payment processing, and more.
              </li>
              <li>
              Version Control and Collaboration:

Using version control systems like Git and platforms like GitHub.
              </li>
             
            </ul>
         
         
         </div>
         <div className='proj'>
            <h3 className='text-center text-white mb-5  '>PROJECTS</h3>
            <div className='d-flex '>
                <div className='pad'>
                    <img src="https://media.licdn.com/dms/image/D5612AQGR4Zq-15MPgQ/article-cover_image-shrink_720_1280/0/1683622493427?e=2147483647&v=beta&t=cSsmtLXtGMgfJ9ZFxyIvRSeC60UmO01BhjY8483Z4H8" alt="" width={'300px'}/>
                    <div className='txt'>
                        <p className='text-white'>Restaurant-listing-app</p>
                    </div>
                </div>
                <div className='pad' >
                    <img src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901783.jpg?t=st=1721325898~exp=1721329498~hmac=34cb5ab70e74d213d0404ab0ab2726312570ddadfb3c7bea7433cfc352cb2ce5&w=900" alt=""  width={'300px'} height={'300px'}/>
                    <div className='txt'>
                        <p className='text-white'>Project-fair</p>
                    </div>
                </div>
                <div className='pad'>
                    <img src="https://static-00.iconduck.com/assets.00/netflix-icon-icon-256x256-5cuftvxi.png" alt=""  width={'300px'} />
                    <div className='txt'>
                        <p className='text-white'>Netflix-clone</p>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default About