import React from 'react';
import "./Button.css"

const Button= (props) => {
    let classList = 'button'
    return (
        <button className={classList} onClick={props.onClick}> 
            {props.label} 
        </button>
    )
}

export default Button;