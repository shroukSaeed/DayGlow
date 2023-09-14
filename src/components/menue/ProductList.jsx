import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { products, categories } from '../../models/categories';
import ProductCard from './ProductCard';

export default function ProductList(props) {
   
    return (
        <div className='my-5'>
            <h3 className='ms-5'>{props.title}</h3>
            <img className='my-4 img-fluid' src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2020/11/sec-title-1.png" alt="" />
            <Row>
                {
                    props.products.map(product => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }
            </Row>
        </div>
    )
}
