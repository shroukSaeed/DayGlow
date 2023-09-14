import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addItem } from '../../ReduxTk/slices/cartSlice'

export default function ProductCard(props) {
  const navigator = useNavigate()
  const dispatch = useDispatch()


  const handleClick = () => {
    // localStorage.setItem('product', props.product)
    navigator('/products/'+props.product.id)
  }

  const handleAddtoCart =()=>{
    dispatch(addItem(props.product))
  }
  // console.log(props);
  return (
    <Col md={4} lg={3}>
      <Card className='text-center mb-5'><Link className='text-decoration-none text-dark' to={'/products/' + props.product.id}>
        <Card.Img variant='top' src={props.product.imgSrc} className='Card__img' /></Link>
        <Card.Body>
          <Card.Title><Link className='text-decoration-none text-dark' to={'/products/' + props.product.id}>{props.product.title}</Link></Card.Title>
          <Card.Text>{props.product.price}$</Card.Text>
          <Card.Text>{props.product.category}</Card.Text>
          <Button variant='warning ' onClick={handleClick} ><i className="bi bi-eye text-light btn-warning"></i></Button>
          <Button variant='warning text-light ms-2' onClick={handleAddtoCart} >Add to Cart</Button>
        </Card.Body>

      </Card>
    </Col>
  )
}
