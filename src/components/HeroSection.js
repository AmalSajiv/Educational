import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './HeroSection.css'
// import heroImg from '../../src/assests/hero-img.png'

function HeroSection() {
  return (
    <section id='home'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                <div className="hero__content">
                    <h2 className="mb-4 hero__title">
                        Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
                    </h2>
                    <p className="mb-4">
                        When we improve our education and continue to learn, <br /> we can foster new connections, 
                        increase our marketable <br /> skills, and understand people better.
                    </p>
                    <div className="search">
                        <input type="text" placeholder="Search" />
                        <button className="btn">Search</button>
                    </div>
                </div>
                </Col>
                <Col lg="6" md="6">
                    {/* <img src={heroImg} alt='' className='w-100 hero__img' /> */}
                    <img src='https://i.postimg.cc/pLP1DV22/hero-img.png' alt='' className='w-100 hero__img'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection