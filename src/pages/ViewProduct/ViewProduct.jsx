import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addItem } from '../../ReduxTk/slices/cartSlice'


export default function ViewProduct() {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()


    const handleAddtoCart =()=>{
        dispatch(addItem(product))
      }

    // const handleClick = () => {
    //     var pro = JSON.parse(localStorage.getItem("product") || "[]")
    //     console.log(pro);
    //     // if (pro){
    //     //     // console.log([pro,product])
    //     //     pro=[...pro,product]
    //     //     localStorage.setItem('product', JSON.stringify(pro))
    //     // }
    //     // else{

    //     //     localStorage.setItem('product', JSON.stringify(product))
    //     // }
    //     pro.push(product);
    //     localStorage.setItem("product", JSON.stringify(pro));
    // }

    useEffect(() => {
        fetch('http://localhost:3005/products/' + id)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleQuantityChange = (e) => {
        const value = e.target.value
        if (value < 1) setQuantity(1)
        else setQuantity(value)
    }

    return (
        <div className='container  p-4 '>
            <Row className='my-5 border rounded p-5 '>
                <Col md={4} className='align-items-center '>
                    <img src={product.imgSrc} className='w-100' />
                    
                </Col>
                <Col md={8} className=' d-flex flex-column justify-content-center ps-5'>
                    <h2>{product.title}</h2>
                    {/* <p><strong>Brand:</strong>{product.brand} </p> */}
                    <p><strong>price:</strong> {parseInt(product.price) * quantity} $</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <div className='Cart_quantity d-flex flex-wrap justify-content-between'>
                        <div className="quantity rounded-3 d-flex text-center pt-1">
                            <p className='me-3'><strong>Quantity:</strong></p>
                            <button className='border-0 justify-content-center px-3 py-1 ' onClick={() => setQuantity(prev => (prev + 1))}>+</button>
                            <input type='number' className='border-0 text-center w-25 ' value={quantity} onChange={handleQuantityChange} />
                            <button className='border-0 justify-content-center px-3 py-1' onClick={() => setQuantity(prev => {
                                if (prev === 1) return prev
                                return prev - 1
                            })}>-</button>
                        </div>
                        <Button variant='btn btn-warning text-light flex-grow-1 ' className='btn-hover' onClick={handleAddtoCart}>Add To Cart</Button>
                    </div>
                </Col>

                <div className="details my-4 text-secondary">
                    <div className="header py-5">
                    <h3 >Description:</h3>
                    </div>
                        <p>{product.describtion}</p>
                    </div>
            </Row>
        </div>
    )
}
