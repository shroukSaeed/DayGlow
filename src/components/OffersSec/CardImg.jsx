import React from 'react'
import Card from 'react-bootstrap/Card';

export default function CardImg(props) {
    const imgSrc=props.src
    // console.log(props.src);
    return (
        <div>
            <Card
                key={'Warning'}
                text={'light'}
                style={{ width: '8rem' }}
                className="bg-orange"
            >
                <Card.Header className='text-center'><strong>20,00$</strong></Card.Header>
                <Card.Body className='p-0'>
                    <Card.Img src={imgSrc} />
                </Card.Body>
            </Card>
        </div>
    )
}
