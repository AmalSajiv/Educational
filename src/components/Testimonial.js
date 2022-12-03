import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick'
import img from '../../src/assests/testimonial.png'
import './Testimonial.css'

function Testimonial() {

    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
    }

  return (
    <section>
        <Container>
            <Row>
                <Col lg='10'  className='m-auto'>
                    <div className='testimonial__wrapper d-flex justify-content-between align-items-center'>
                        <div className='testimonial__img w-50'>
                            <img src={img} alt='' className='w-100' />
                        </div>
                        <div className='testimonial__content w-50'>
                            <h2 className='mb-4'>Our Student Voice</h2>

                            <Slider {...settings}>
                                <div>
                                <div className='single__testimonial'>
                                    <h6 className='mb-3 fw-bold'>Excellent Course of Materials</h6>
                                    <p>
                                    Understanding your discipline well is not the only prerequisite for teaching 
                                    it effectively to students. For one thing, that deep understanding can 
                                    actually blind you to how you should explain things to students who lack a 
                                    background in the discipline.
                                    </p>
                                    <div className='student__info mt-4'>
                                        <h6 className='fw-bold'>Jhon Deo</h6>
                                        <p>California, United State</p>
                                    </div>
                                </div>
                                </div>

                                <div>
                                <div className='single__testimonial'>
                                    <h6 className='mb-3 fw-bold'>Excellent Course of Materials</h6>
                                    <p>
                                    This course is created for students who wish to understand the marketing 
                                    strategy of luxury brands and want to master tools and strategies in the 
                                    dynamic and unique luxury sector.
                                    </p>
                                    <div className='student__info mt-4'>
                                        <h6 className='fw-bold'>Joy Maxwell</h6>
                                        <p>Paris, France</p>
                                    </div>
                                </div>
                                </div>

                                <div>
                                <div className='single__testimonial'>
                                    <h6 className='mb-3 fw-bold'>Excellent Course of Materials</h6>
                                    <p>
                                    Material selection is one the most important aspects that 
                                    engineers and designers have to keep in mind during the design and production 
                                    of any work.
                                    </p>
                                    <div className='student__info mt-4'>
                                        <h6 className='fw-bold'>Tom Charles</h6>
                                        <p>London, England</p>
                                    </div>
                                </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Testimonial