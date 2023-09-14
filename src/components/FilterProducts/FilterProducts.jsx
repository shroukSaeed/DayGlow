import React from 'react'
import './FilterProducts.css'
import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';

export default function FilterProducts(props) {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState({
    search: '',
    category: '',
    min_price: '',
    max_price: ''
  });

  useEffect(() => {
    fetch('http://localhost:3005/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  // console.log(categories,setCategories);

  function getFilteredData(filterQuery) {
    fetch(`http://localhost:3005/products?${filterQuery}`)
      .then(res => res.json())
      .then(data => props.setProducts(data))
  }

  function submitHandler(e) {
    e.preventDefault();
    let filterArr = [];
    if (filter.category)filterArr.push('category=' + filter.category);
    if (filter.min_price) filterArr.push('price_gte=' + filter.min_price);
    if (filter.max_price) filterArr.push('price_lte=' + filter.max_price);
    if (filter.search) filterArr.push('q=' + filter.search);

    let filterQuery = filterArr.join('&');
    // props.setCurrPage(1);
    getFilteredData(filterQuery);
  }


  function changeHandler(e) {
    const input = e.target;
    setFilter({
      ...filter,
      [input.name]: input.value
    })
  }

  function onResetHandler() {
    setFilter({
      search: '',
      category: '',
      min_price: '',
      max_price: ''
    })

    getFilteredData('')
  }



  return (
    <form onSubmit={submitHandler} className='d-flex gap-3 mb-5 flex-wrap'>
      <input value={filter.search} name='search' onChange={changeHandler} type="search" placeholder='Search...' />
      <select value={filter.category} name='category' onChange={changeHandler} id="">
        <option value="" hidden >Select Category</option>
        {categories.map((ele, idx) => {
          return <option key={idx} value={ele}>{ele}</option>
        })}
      </select>
      <input value={filter.min_price} name='min_price' onChange={changeHandler} type="number" placeholder='min price' />
      <input value={filter.max_price} name='max_price' onChange={changeHandler} type="number" placeholder='max price' />
      <Button variant='dark' type='submit'>Filter</Button>
      <Button onClick={onResetHandler} variant='dark'>Reset</Button>
    </form>
  )
}