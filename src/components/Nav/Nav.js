import React from 'react';
import "./Nav.css"
import { conditionalExpression } from '@babel/types';

const Nav= (props) => {
    let classList = ''
    classList += `${props.type}`
    return(
        <div className={classList}>
            <h1 className="header">bgm.</h1>
            <a href="#" className="link">Meetups</a>
        </div>
    )
}

export default Nav;


