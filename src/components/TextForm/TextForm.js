import React from 'react';
import "./TextForm.css"
import { conditionalExpression } from '@babel/types';

const TextForm= (props) => {
    let classList = ''
    let types = ['email']
    // conditional styling
    classList += `form`

    return (
        <form onChange={props.onChange}> 
            <input type={props} className={classList} placeholder={props.label}></input>
        </form>
    )
}

export default TextForm;