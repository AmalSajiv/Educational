import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"
import './Footer.css'

const footerQuickLinks = [
    {
        display: 'Home',
        url: '#',
    },
    {
        display: 'About US',
        url: '#',
    },
    
    {
        display: 'Courses',
        url: '#',
    },
    
    {
        display: 'Blog',
        url: '#',
    },
]

const footerInfoLinks = [
    {
      display: 'Privacy Policy',
      url: '#',
    },
    {
      display: 'Membership',
      url: '#',
    },
  
    {
      display: 'Purchases Guide',
      url: '#',
    },
  
    {
      display: 'Terms of Service',
      url: '#',
    },
  ]

function Footer() {
  return (
    <section id='contact'>
        <footer className='footer'>
        <Container>
            <Row>
                <Col lg='3'>
                    <h2 className='d-flex align-items-center gap-1'><i class="ri-pantone-line"></i>Learners</h2>
                        <div className='follows'>
                            <p className='mb-0'>Follow us on Social Media</p>
                            <span>{''}<a href='https://www.facebook.com/'><i class="ri-facebook-line"></i></a></span>
                            <span>{''}<a href='https://www.instagram.com/'><i class="ri-instagram-line"></i></a></span>
                            <span>{''}<a href='https://www.linkedin.com/login'><i class="ri-linkedin-line"></i></a></span>
                            <span>{''}<a href='https://twitter.com/i/flow/login'><i class="ri-twitter-line"></i></a></span>
                        </div>
                </Col>

                <Col lg='3'>
                    <h6 className='fw-bold'>Explore</h6>
                    <ListGroup className='link__list'>
                        {
                            footerQuickLinks.map((item,index) => (
                                <ListGroupItem key={index} className='border-0 ps-0 link__item'>{''}
                                <a href={item.url}>{item.display}</a></ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='3'>
                    <h6 className='fw-bold'>Information</h6>
                    <ListGroup className='link__list'>
                        {
                            footerInfoLinks.map((item,index) => (
                                <ListGroupItem key={index} className='border-0 ps-0 link__item'>{''}
                                <a href={item.url}>{item.display}</a></ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='3'>
                    <h6 className='fw-bold'>Get in Touch</h6>
                    <p>Address: Mumbai, India</p>
                    <p>Phone: +91 0123456789</p>
                    <p>Email: example@gmail.com</p>
                </Col>
            </Row>
        </Container>
        </footer>
    </section>
  )
}

export default Footer