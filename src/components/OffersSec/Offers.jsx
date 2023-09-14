import React from 'react'

import CardItem from './CardItem';

export default function Offers() {
    
    return (
        <div>
            <div className="container my-5">
                <div className="row my-5">
                    <div className="col-lg-6 col-sm-12">
                        <img src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2022/06/offer-banner-1.png" className='img-fluid' alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12  p-2">

                        <CardItem  />
                        {/* item={product} */}
                        {/* <CardItem item={product} />
                        <CardItem item={product} /> */}

                    </div>
                </div>
            </div>
        </div>
    )
}
