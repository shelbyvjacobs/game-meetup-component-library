import React from 'react';
import "./Game.css"
import { conditionalExpression } from '@babel/types';


const Game= (props) => {
    let classList = ''
    classList += `${props.type}`
    return(
        <div className={classList}>
            <img src={props.img}></img>
            <div className={props.info}>
                <h2>Name</h2>
                <p><span className="bold">Minimum players:</span> 4</p>
                <p><span className="bold">Maximum players:</span> 8</p>
                <p><span className="bold">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p><span className="bold">Directions:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}

export default Game;