import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Resume() {
  return (
    <div className='res'>
        <h3 className='text-center'>About me</h3>
        <h6 className='text-center'>I am a dedicated and detail-oriented web developer with a passion for crafting efficient, user-friendly solutions. With 6 months of experience in front-end and back-end development, I specialize in  Html, Css, Bootstrap,JavaScript, Mongodb, React.js, Node.js, Angular. I thrive in collaborative environments where I can apply my problem-solving skills to create robust and scalable web applications. My goal is to leverage my expertise to deliver compelling digital experiences and drive client satisfaction.</h6>
        <br />
        <div className='text-center'>
            <a href="./src/cv.pdf" download className='btn text-white bg-danger'>DOWNLOAD CV</a>
        </div>
        <hr className='hrr' />
        <br />
       
        <Row>
            <Col className='exp'>
            
               <h3 className='text-center'>EXPERIENCE</h3>
               <p className='mt-4'>
               ME(A)RN Stack Developer Intern:
               </p>

<p>Luminar technolab, kochi, November/2023 - june/2024

Developed and maintained web applications using MongoDB, Express.js, Angular, React.js and Node.js (ME(A)RN stack).
Assisted in designing front-end user interfaces using Angular, React.js and implementing client-side logic.
Integrated backend services with the Angular, React.js front-end using RESTful APIs.
Collaborated with team members to troubleshoot and resolve issues in a timely manner.
Conducted unit testing and participated in quality assurance processes to ensure application stability.                
</p>
               <br />
               <div className='skill'>
               <h2 className='text-center'>Skills</h2>

               <p><h6>Html</h6>
                
                <span className='bar'><span className='html'></span></span>
               </p>
               <p><h6>Css</h6>
                
                <span className='bar'><span className='css'></span></span>
               </p>
               <p><h6>Javascript</h6>
                
                <span className='bar'><span className='javascript'></span></span>
               </p>
               <parseFloat> <h6>React js</h6>
               
                <span className='bar'><span className='react'></span></span>
               </parseFloat>
               <p> <h6>Node js</h6>
               
                <span className='bar'><span className='node'></span></span>
               </p>
               <p><h6>Angular</h6>
                
                <span className='bar'><span className='angular'></span></span>
               </p>
               </div>
            </Col>
            <Col>
            <h2 className='text-center'>Education</h2>
            <h6 className='ms-5 mt-4'>HIGHER SECONDARY:
            </h6>
            <p className='ms-5 mt-3'>MNKMHSS CHITILAMCHERY <span className='date'>2017-2019</span></p>
            <p className='ms-5 '>COURSE: COMPUTER SCIENCE</p>
            <br />
            <h6 className='ms-5'>PROFESSIONAL DEGREE:</h6>
            <p className='ms-5 mt-3'>NEHRU COLLEGE OF ENGINEERING AND RESEARCH CENTER, THRISSUR <span className='date1'>2019-2023</span></p>
            <p className='ms-5'>COURSE: COMPUTER SCIENCE ENGINEERING</p>

            <hr className='hr1'/>

            <h3 className='text-center'>SOFT SKILLS</h3>
            <li className='ms-5'>READING</li>
            <li className='ms-5'>WRITING</li>
            <li className='ms-5'>LISTENING</li>
            <li className='ms-5'>COMMUNICATION</li>
            </Col>
        </Row>
     
    </div>
  )
}

export default Resume