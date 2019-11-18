import React from 'react';
import "./Button.css"
import { conditionalExpression } from '@babel/types';

const Button= (props) => {
    let classList = ''
    let types = ['primary']
    // conditional styling!
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    } 
    if (props.medium) {
        classList += ` button-medium`
    }
    if (props.large) {
        classList += ` button-large`
    }
    return (
        <button className={classList} onClick={props.onClick}> 
            {props.label} 
        </button>
    )
}

export default Button;