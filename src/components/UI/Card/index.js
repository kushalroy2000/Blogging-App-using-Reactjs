import React from 'react'
import './index.css'

export const Card = (props) => {
    return (
        <div className="card" style={{width:props.width?props.width:'100%'}}>
            {props.children}
        </div>
    )
}

export default Card
