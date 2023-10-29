import React from 'react'
import { Container } from 'react-bootstrap'
import NewCarousel from '../newCarousel/NewCarousel'

export default function Strength() {
  return (
    <div className='text-center'>
      <h1>Our Strength</h1>
      <img className='my-4 img-fluid' src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2020/11/sec-title-1.png" alt="" />

      <Container>
        <NewCarousel/>
      </Container>
    </div>
  )
}
