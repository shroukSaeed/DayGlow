import React, { useEffect, useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';


export default function Footer() {

    const [menueItem, setMenueItem] = useState([])
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:3005/products')
            .then(res => res.json())
            .then(data => setMenueItem(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:3005/strength')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(menueItem)

    return (
        <Container fluid className='footer text-light   '>
            <Row className='footer-over-lay'>
                <Col>
                    <div className="about p-5 ">
                        <div className="header my-5">
                            <h2>About Us..</h2>
                        </div>
                        <p>Energistically repurpose client-based odels
                            rather than magnetic sources. Intrinsicly
                            bcks-and-mortar ideas before.</p>


                        <ListGroup horizontal={'sm'} className=" my-2 ">
                            <ListGroup.Item key={'facebook'} className='bg-transparent border-0 hover-effect'><Link to={'https://facebook.com'}><i class="bi bi-facebook text-orange"></i></Link></ListGroup.Item>
                            <ListGroup.Item key={'twitter'} className='bg-transparent border-0 hover-effect'><Link to={'https://facebook.com'}><i class="bi bi-twitter text-orange"></i></Link></ListGroup.Item>
                            <ListGroup.Item key={'instagram'} className='bg-transparent border-0 hover-effect'><Link to={'https://facebook.com'}><i class="bi bi-instagram text-orange"></i></Link></ListGroup.Item>
                            <ListGroup.Item key={'linkedin'} className='bg-transparent border-0 hover-effect'><Link to={'https://facebook.com'}><i class="bi bi-linkedin text-orange"></i></Link></ListGroup.Item>
                        </ListGroup>

                    </div>
                </Col>
                <Col>
                    <div className="food-menue p-5 ">
                        <div className="header my-5">
                            <h2>You are Welcomed</h2>
                        </div>
                        <div className="cont d-flex">
                            <p className='fs-5'>we are ready to receive any orders with large events and will be happy to become the good part in your Event .</p>
                            {/* <ListGroup className="bg-transparentmy-2 ">
                                {
                                    menueItem.slice(0, 6).map((item) => {
                                        return <ListGroup.Item className='bg-transparent border-0  '><Link to={'http://localhost:3000/products/' + item.id} key={item.id} className='text-decoration-none hover-effect-link ' >  {item.title}</Link></ListGroup.Item>

                                    })
                                }
                            </ListGroup> */}
                            {/* <ListGroup className="bg-transparentmy-2 ">

                                {
                                    menueItem.slice(6, 12).map((item) => {
                                        return <ListGroup.Item className='bg-transparent border-0  '><Link to={'http://localhost:3000/products/' + item.id} key={item.id} className='text-decoration-none hover-effect-link ' >  {item.title}</Link></ListGroup.Item>

                                    })
                                }
                            </ListGroup> */}
                        </div>

                    </div>
                </Col>
                <Col>
                    <div className="services p-5 ">
                        <div className="header my-5">
                            <h2>Our Services</h2>
                        </div>
                        <ListGroup className="bg-transparentmy-2 ">
                            {
                                services.map((item) => {
                                    return <ListGroup.Item className='bg-transparent border-0  '><Link key={item} className='text-decoration-none hover-effect-link fs-5 ' > <i class="bi bi-lightning"></i>
                                    {item.title}</Link></ListGroup.Item>

                                })
                            }
                        </ListGroup>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}
