import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function OfferSection() {
    return (
        <div className='offer  my-5 '>
            <Row className="bg-dark bg-opacity-50 w-100 py-5 justify-content-between align-items-center">
                <Col lg={9} sm={12} className='text-center  p-5 text-light my-5'>
                    <h3>Clebrate at one of NY's most awarded restaurant</h3>
                    <h6>Only this month business lunch from $30.90</h6>
                </Col>

                <Col lg={3} sm={12} className=' my-4 d-flex justify-content-center'>
                    <button className='btn btn-warning px-4  rounded-pill fs-4 fw-bold text-light '>GET OFFER</button>
                </Col>
            </Row>
        </div>
    )
}
