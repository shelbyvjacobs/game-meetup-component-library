import React from 'react';
import "./Nav.css"
import { conditionalExpression } from '@babel/types';

const Nav= (props) => {
    let classList = ''
    let types = ["nav"]
    // conditional styling!
    if (types.includes(props.type)) {
        classList += `${props.type}`
    } 
    return(
        <div className={classList}>
            <h1>Game On</h1>
            <a href="#">Meetups</a>
        </div>
    )
}

export default Nav;