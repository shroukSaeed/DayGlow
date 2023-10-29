import React from 'react'
import { Link } from 'react-router-dom'

export default function Heading() {
  return (
    <>
      <div className="head-section   text-center ">
                <div className="  p-5 over-img">
                    <h1 className='text-light'>{}</h1>
                    <div className="bread-crumb  ">
                        {/* text-center  w-25 d-block py-3 rounded-pill mx-auto */}
                        <p className='fs-4'><Link to='/' className='text-decoration-none text-secondary  '>Home</Link> - {}</p>
                    </div>
                </div>
            </div>
    </>
  )
}
