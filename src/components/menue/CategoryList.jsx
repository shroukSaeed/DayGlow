import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

export default function CategoryList(props) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3005/categories/'+categories)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // console.log(props);

    // console.log(categories)
    return (
        <div className='d-flex justify-content-center flex-wrap'>
            <Button onClick={() => {
                props.setCurrentCategory('')
                props.handelChange('')
            }} className='mx-3 my-5 text-light ' value='' variant='warning' >All</Button>
            {
                categories.map(category => {
                    return <Button onClick={() => {
                        props.setCurrentCategory(category)
                        props.handelChange(category)
                        // console.log(category)
                    }} value={category} key={category} className='mx-3 my-5 text-light ' variant='warning' >{category}</Button>
                })
            }
        </div>
    )
}
