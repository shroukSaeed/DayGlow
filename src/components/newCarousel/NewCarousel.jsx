import React, { useEffect, useState } from 'react'
import './NewCarousel.css'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function NewCarousel() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3005/strength')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <Carousel responsive={responsive} className=''>
            {/* <div className=' position-relative  border border-warning rounded '> */}
                <div className='item p-2 mx-1 text-center  start-0 border border-warning rounded'>
                    <div className="img-holder">
                        <img src="https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1600" className='img-fluid strength-img' alt="" />
                    </div>
                    <h1 className='text-orange'>Wedding</h1>
                    <img className='my-4 img-fluid' src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2020/11/sec-title-1.png" alt="" />

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde non accusantium quos dolore facilis, quo quas corporis animi recusandae exercitationem quibusdam! Debitis aliquid asperiores labore iusto consequuntur exercitationem ex maiores?</p>
                </div>
            {/* </div> */}
            {/* <div className='p-1 position-relative  border border-warning rounded '> */}

                <div className='item p-2 mx-1 text-center border border-warning rounded'>
                    <div className="img-holder">
                        <img src="https://images.pexels.com/photos/7180857/pexels-photo-7180857.jpeg?auto=compress&cs=tinysrgb&w=1600" className='img-fluid strength-img' alt="" />
                    </div>
                    <h1 className='text-orange'>Birthday</h1>
                    <img className='my-4 img-fluid' src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2020/11/sec-title-1.png" alt="" />

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde non accusantium quos dolore facilis, quo quas corporis animi recusandae exercitationem quibusdam! Debitis aliquid asperiores labore iusto consequuntur exercitationem ex maiores?</p>
                </div>
            {/* </div> */}
            {/* <div className='p-1 position-relative border border-warning rounded '> */}
            <div className='item p-2 mx-1 text-center border border-warning rounded'>
                <div className="img-holder">
                    <img src="https://images.pexels.com/photos/6017733/pexels-photo-6017733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid strength-img' alt="" />
                </div>
                <h1 className='text-orange'>Dinner</h1>
                <img className='my-4 img-fluid' src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2020/11/sec-title-1.png" alt="" />

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde non accusantium quos dolore facilis, quo quas corporis animi recusandae exercitationem quibusdam! Debitis aliquid asperiores labore iusto consequuntur exercitationem ex maiores?</p></div>
            {/* </div> */}
            {/* <div className='p-1 position-relative  border border-warning rounded '> */}

            <div className='item p-2 mx-1 text-center border border-warning rounded'>
                <div className="img-holder">
                    <img src="https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1600" className='img-fluid strength-img' alt="" />

                </div>
                <h1 className='text-orange'>Catering</h1>
                <img className='my-4 img-fluid' src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2020/11/sec-title-1.png" alt="" />

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde non accusantium quos dolore facilis, quo quas corporis animi recusandae exercitationem quibusdam! Debitis aliquid asperiores labore iusto consequuntur exercitationem ex maiores?</p></div>
                {/* </div> */}
        </Carousel>
    )
}
