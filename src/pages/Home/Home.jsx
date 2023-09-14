import React from 'react'
import MyCarousel from '../../components/MyCarousel/MyCarousel'
import { Container } from 'react-bootstrap'
import Story from '../../components/OurStory/Story'
import { Resizable } from '../../components/OurStrength/Resizable'
import Strength from '../../components/OurStrength/Strength'
import OfferSection from '../../components/NewOffer/OfferSection'
import Offers from '../../components/OffersSec/Offers'
import Menue from '../../components/menue/Menue'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <MyCarousel />
      <Container>
        <Story />
        {/* <Resizable /> */}
        <Strength />
      </Container>
      <OfferSection />
      <Offers />
      <Menue />
      <Container className='alert-secondary alert p-5 d-flex justify-content-center my-5 ' >     
        <Link to={'/menue'} className='btn-warning px-4 py-2 rounded text-decoration-none text-light fw-bolder'>See More</Link>
      </Container>
    </>
  )
}
