import React, { useEffect, useState } from 'react'
import MenuePagination from './MenuePagination'
import { Container } from 'react-bootstrap'
import ProductList from './ProductList'
// import {products} from '../../models/categories'

export default function Menue() {
  const [products , setProducts] =useState([])

  useEffect(() => {
      fetch('http://localhost:3005/products')
          .then(res => res.json())
          .then(data => setProducts(data))
  }, [])
  return (
    <div>
      {/* <MenuePagination/> */}
      <Container>
        <ProductList title='Latest Products' products={products.slice(0,4)}/>
        <ProductList title='New Offers' products={products.slice(4,8)}/>
      </Container>

    </div>
  )
}
