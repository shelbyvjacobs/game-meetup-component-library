import React from 'react';
import "./TextForm.css"
import { conditionalExpression } from '@babel/types';

const TextForm= (props) => {
    let classList = ''
    classList += `form`

    return (
        <form onChange={props.onChange}> 
            <input type={props} className={classList} placeholder={props.label}></input>
        </form>
    )
}

export default TextForm;