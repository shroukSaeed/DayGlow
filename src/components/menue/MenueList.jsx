import React from 'react'
import ProductCard from './ProductCard'
import { Container, Row } from 'react-bootstrap'

export default function MenueList(props) {
    // const {products} = props
    // const p = props.products.products
    // console.log(props.products);

    return (
        <Container>
            <Row className=''>

                {
                    props.products.length > 0 ?
                        props.products.map(product => {
                            // console.log(product);
                            return <ProductCard key={product.id} product={product} />
                        })
                        :
                        <div className='p-5 text-center'>
                        <h1 className='text-danger' >No Products Available {':('} </h1>
                        </div>
                    
                }

            </Row>
        </Container>
    )
}
