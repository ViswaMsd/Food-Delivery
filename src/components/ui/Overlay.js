import React from 'react'
import './Overlay.css';

function Overlay(props) {
    return (
        <div className='overlay'
            // onClick={props.onClick}
        >
            {props.children}
        </div>
    )
}

export default Overlay
