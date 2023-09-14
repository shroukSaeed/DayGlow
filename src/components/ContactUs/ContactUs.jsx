import React, { useState } from 'react'
import './ContactUs.css'
import '../../index.css'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button, Col, Container, Row } from 'react-bootstrap';

export default function ContactUs() {

    const [message, setMessage] = useState({
        email: '',
        fullName: '',
        message: ''
    })

let navigator = useNavigate();

    const changeHandler = (e) => {


        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    }
    const clickHandler=(e)=> {
        e.preventDefault();
        if (
            message.email != "" &&
            message.fullName != "" &&
            message.message != ""
        ) {
            // console.log(message);
            handleAddMessage(message);
        }
        
    }

    function handleAddMessage(data) {
        fetch('http://localhost:3005/messages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        navigator('/')
    }

    return (
        <>
            <div className="head-section   text-center ">
                <div className="  p-5 over-img">
                    <h1 className='text-light'>Contact Us</h1>
                    <div className="breadcrumb text-center  w-25 d-block py-3 rounded-pill mx-auto ">
                        <p className='fs-4'><Link to='/' className='text-decoration-none text-secondary '>Home</Link> - Contact Us</p>
                    </div>
                </div>
            </div>

            <Container fluid>
                <Row className='contact-us  my-5 p-5 '>
                    <Col xl={6} md={12} className="contact-form bg-dark p-5 ">
                        <h3 className='text-light'>Write Us ...</h3>
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="E-mail"
                            className="mb-3"
                        >
                            <Form.Control as="textarea" placeholder="Leave a comment here" onChange={changeHandler} name='email'
                                value={message.email} />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Full Name"
                            className="mb-3"
                        >
                            <Form.Control as="textarea" placeholder="Leave a comment here"  onChange={changeHandler} name='fullName'
                                value={message.fullName}/>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingTextarea2" label="Message">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave your Message here"
                                style={{ height: '100px' }}
                                onChange={changeHandler}
                                name='message'
                                value={message.message}
                            />
                        </FloatingLabel>

                        <Button onClick={clickHandler} variant="orange text-light m-5 rounded-pill  px-4   d-block mx-auto " className='hover-effect' type="button">
                            Submit
                        </Button>
                    </Col>
                    <Col xl={6} md={12} className="contacts  p-5   ">
                        <h1 className='text-light text-center'>Contact informations</h1>
                        <div className='text-light px-5 my-3'>
                            <h5 className='text-secondary' >Address</h5>
                            <h3><i class="bi bi-geo-alt-fill text-orange mx-2"></i> 374 William S Canning Blvd, Fall River MA 2721</h3>
                        </div>
                        <div className='text-light px-5 my-3'>
                            <h5 className='text-secondary'>Phone number</h5>
                            <h3><i class="bi bi-telephone-fill text-orange mx-2"></i> 01208569941</h3>
                        </div>
                        <div className='text-light px-5 my-3 '>
                            <h5 className='text-secondary'>Email</h5>
                            <h3><i class="bi bi-envelope-fill text-orange mx-2"></i> contact@sjs.com</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
