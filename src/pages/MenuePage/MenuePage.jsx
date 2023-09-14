import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
// import CategoryList from '../components/menue/CategoryList';
import MenueList from '../../components/menue/MenueList';
import FilterProducts from '../../components/FilterProducts/FilterProducts';
export default function MenuePage() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3005/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Container>
            <div>
                <FilterProducts setProducts={setProducts} />
                <MenueList products={products} />
            </div>
        </Container>
    )
}
