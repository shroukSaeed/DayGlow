import React from 'react'
import MyCarousel from '../../components/MyCarousel/MyCarousel'
import { Container } from 'react-bootstrap'
import Story from '../../components/OurStory/Story'
import Strength from '../../components/OurStrength/Strength'
import OfferSection from '../../components/NewOffer/OfferSection'
import Offers from '../../components/OffersSec/Offers'
import Menue from '../../components/menue/Menue'
import { Link } from 'react-router-dom'
import NewCarousel from '../../components/newCarousel/NewCarousel'

export default function Home() {
  return (
    <>
      <MyCarousel />
      <Container>
        <Story />
        <Strength />
      </Container>
      <OfferSection />
      <Offers />
      <Menue />
      <NewCarousel/>
      <Container className='  d-flex justify-content-center mb-5' >
        <Link to={'/menue'} className='btn-warning px-4 py-2 rounded text-decoration-none text-light fw-bolder w-50 text-center'>See More</Link>
      </Container>
    </>
  )
}
