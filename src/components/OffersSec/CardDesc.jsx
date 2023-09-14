import React from 'react'

export default function CardDesc(props) {
    return (
        <div>
            <div className="card-description   p-5">
                <h3>{props.title}</h3>
                <p>{props.gradiants}</p>
            </div>
        </div>
    )
}
