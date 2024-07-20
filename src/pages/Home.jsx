import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../components/Header.css"

function Home() {
  return (
    <div className='first'>
          <div className='cont'>
          <Row>
            <Col className='col1'>
            <p>Hi, Iam</p>
            <h1>ABHISHEK R</h1>
            <hr />
            <h5 className='web'> WEB DEVELOPER</h5>
            <hr />
            <a href="#contact" className='bt'>
            <button className='btn btn-dark m-2' >Contact</button>
            </a>
            
            </Col>
            <Col className='col2 '>
            <img className='imgh' src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg" alt="" />
            </Col>

          </Row>

        

        </div>
        
    </div>
  )
}

export default Home