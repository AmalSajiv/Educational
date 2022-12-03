import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import chooseImg from '../../src/assests/why-choose-us.png'
import './ChooseUs.css'
import ReactPlayer from 'react-player'

function ChooseUs() {

  const [showVideo,setShowVideo] = useState(false)

  return (
    <section id='page'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='choose__content'>
              <h2>Why Choose Us</h2>
              <p>
              A Cambridge education prepares students for life, helping them develop an informed curiosity and a 
              lasting passion for learning. Schools can shape a Cambridge curriculum around how they want their 
              students to learn, helping them discover new abilities and a wider world. Cambridge students develop 
              the skills they need to achieve at school, university and work.Cambridge Assessment International 
              Education prepares school students for life, helping them develop an informed curiosity and a 
              lasting passion for learning. We are part of the University of Cambridge.
              </p>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className='choose__img'>
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/_g45BJCAXu4"
                  controls
                  width='100%'
                  height='350px'
                />
              ) : (
                <img src={chooseImg} alt='' className='w-100' />
              )}

              {
                !showVideo && (
                  <span className='play__icon'>
                    <i
                    class='ri-play-circle-line'
                    onClick={() => setShowVideo(!showVideo)}
                    ></i>
                 </span>
                )
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ChooseUs