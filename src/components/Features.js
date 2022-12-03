import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Features.css'

const FeatureData = [
    {
        title: 'Quick Learning',
        desc: 'Quick learning ability helps you to outsmart your classmates or colleagues, experience a greater edge and stay on top of the achiever’s list.',
        icon: 'ri-draft-line',
      },
    
      {
        title: 'All Time Support',
        desc: 'Education systems are complex. Getting all children in school and learning requires alignment across families, educators and decision makers.',
        icon: 'ri-discuss-line',
      },
    
      {
        title: 'Certification',
        desc: ' A certificate program is considered continuing education in some cases because it builds on your knowledge of a particular career or industry.',
        icon: 'ri-contacts-book-line',
      },
]

function Features() {
  return (
    <section id='page'>
        <Container>
            <Row>
                {FeatureData.map((item, index) => (
                    <Col lg="4" md="6" key={index}>
                        <div className="single__feature text-center px-4">
                            <h2 className="mb-3">
                            <i class={item.icon}></i>
                            </h2>
                            <h6>{item.title}</h6>
                            <p>{item.desc}</p>
                         </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
  )
}

export default Features