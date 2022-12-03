import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import courseImg1 from '../../src/assests/web-design.png'
import courseImg2 from '../../src/assests/graphics-design.png'
import courseImg3 from '../../src/assests/ui-ux.png'
import './Courses.css'
import CourseCard from './CourseCard'

const CoursesData = [
    {
        id:'01',
        title: 'Web Design Bootcamp - 2022 for Beginners',
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg1
    },
    {
        id:'02',
        title: 'Professional Graphics Design, PhotoShop, Adobe, XD, Figma',
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg2
    },
    {
        id:'03',
        title: 'UI/UX BootCamp for Beginners in 2022',
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg3
    }
]

function Courses() {
  return (
    <section id='course'>
        <Container>
            <Row>
                <Col lg='12'>
                    <div className='course__top d-flex justify-content-between align-items-center'>
                        <div className='course__top__left w-50'>
                            <h2>Our Popular Courses</h2>
                            <p>
                            There are various kinds of courses available: from online courses to summer courses 
                            and intensive courses. There are coursesin a wide variety of subjects, from cosmetology
                             to engineering, food and beverage studies to law and regulations, biology to fashion. 
                             The variety of different courses can be overwhelming - don't let it stop you! Start 
                             your search by looking at the most popular courses listed below.
                            </p>
                        </div>
                        <div className="w-50 text-end">
                            <button className="btn">See All</button>
                        </div>
                    </div>
                </Col>
                {
                    CoursesData.map(item => (
                        <Col lg='4' md='6'>
                            <CourseCard Key={item.id} item={item} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

export default Courses