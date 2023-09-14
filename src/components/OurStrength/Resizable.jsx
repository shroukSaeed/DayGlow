import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// import birthday from '../imgs/birthday.png'
// import wedding from '../imgs/wedding.png'
// import dinner from '../imgs/dinner.png'
// import catering from '../imgs/catering.png'
import { Col, Row } from "react-bootstrap";
import './Resizable.css'

export default function Resizable() {
    // state = {
    //     display: true,
    //     width: 600
    // };


    // const [display, setDisplay] = useState({
    //     display: true,
    //     width: 600
    // })
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3005/strength')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        // space: 5,
        slidesToScroll: 1
    };


    return (

        <Row className="gap-3">
            <Slider className="mb-5 p-5 " {...settings}  >

                {
                    products.map((item) => {
                        return <Col lg={4} md={6} sm={12} className=" slider-col  text-center p-2  " key={item.id}>
                            <div className="img-holder  d-flex justify-content-center">
                                <img className="img-fluid strength-img" src={item.imgSrc} alt="" />
                            </div>
                            <div className="desc p-4">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>

                        </Col>
                    })

                }

            </Slider>

        </Row>

    );
}

