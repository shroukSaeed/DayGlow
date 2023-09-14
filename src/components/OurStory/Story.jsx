import React from 'react'
import drink from '../../imgs/drink.png'
import food from '../../imgs/food.png'
import cook from '../../imgs/cook.png'
import { Col, Container, Row } from 'react-bootstrap'

export default function Story() {
  return (
    <Container>
      <Row className=' my-5 '>
        <Col md={6}  sm={12} className=" my-5">
          <img className='img-fluid' src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2022/06/about-bg-6-2.png" alt="" />
        </Col>
        <Col md={6}  sm={12} className=" my-5 ">
          <h1>Discover Our Story</h1>
          <img className='my-4 img-fluid' src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2020/11/sec-title-1.png" alt="" />

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni commodi doloribus natus. Distinctio rerum repellendus incidunt magni molestias sapiente, amet cumque commodi aspernatur corporis nulla tempore qui facere veniam rem ea assumenda!</p>

          <div className='d-flex my-5 '>
            <div className="description d-flex me-3">
              <div className="media-icon"><img className='img-fluid' src={drink} alt="" /></div>
              <div className='d-block'>
                <div className="count fw-bolder fs-2">93</div>
                <div className="title">Beverages</div>
              </div>
            </div>
            <div className="description d-flex me-3">
              <div className="media-icon"><img className='img-fluid' src={food} alt="" /></div>
              <div className='d-block'>
                <div className="count fw-bolder fs-2">93</div>
                <div className="title">Food Items</div>
              </div>
            </div>
            <div className="description d-flex me-3">
              <div className="media-icon"><img className='img-fluid' src={cook} alt="" /></div>
              <div className='d-block'>
                <div className="count fw-bolder fs-2">93</div>
                <div className="title">Cooks</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

  )
}
