import React from 'react'
import CardImg from './CardImg'
import CardDesc from './CardDesc'

export default function CardItem(props) {
    const products = [{

        prodSrc: 'https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2020/11/img-5-150x150.jpg',
        prodTitle: 'Bacon Ranch Pasta ',
        prodGradiants: 'Soft Drink, Dim Polao, Kabab'

    },
    {

        prodSrc: 'https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2020/11/img-8-150x150.jpg',
        prodTitle: 'Buttermilk Fried ',
        prodGradiants: 'Soft Drink, Dim Polao, Kabab'

    },
    {

        prodSrc: 'https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2020/11/img-6-150x150.jpg',
        prodTitle: 'Parmesan Vegetable ',
        prodGradiants: 'Soft Drink, Dim Polao, Kabab'

    }]
    return (
        <>
                {
                    products.map((product) => {
                        console.log(product.prodTitle);

                        return (
                            <div className='d-flex my-1 pt-2 border   border-warning border-start-0 rounded-end' key={product.prodTitle}>

                                <CardImg src={product.prodSrc} />
                                <CardDesc title={product.prodTitle} gradiants={product.prodGradiants} />
                            </div>
                        )
                    })
                }

                
        </>
    )
}
