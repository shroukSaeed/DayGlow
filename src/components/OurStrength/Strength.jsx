import React from 'react'
// import birthday from '../imgs/birthday.png'
// import wedding from '../imgs/wedding.png'
// import dinner from '../imgs/dinner.png'
// import catering from '../imgs/catering.png'
import  Resizable  from './Resizable'
import { Container, Row } from 'react-bootstrap'

export default function Strength() {
    return (
        <Container className=' text-center '>
            <h2 className=''>Our Strength</h2>
            <img className='my-4 img-fluid' src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2020/11/sec-title-1.png" alt="" />
            <Container className=" gap-1 justify-content-between my-5">
                
                <Resizable />

            </Container>
        </Container>


    )
}
