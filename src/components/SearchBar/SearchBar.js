import React from 'react';
import "./SearchBar.css"
import { conditionalExpression } from '@babel/types';

//MAKE THIS A CLASS COMPONENT? REDUX

const SearchBar= (props) => {
    let classList = ''
    // let types = ["searchBar"]
    classList += `${props.type}`
    return (
        <div className={classList} >
            <form>
                <div>
                    <p>Search by Game</p>
                    <input type="text"></input>
                    <input type="submit"></input>
                </div>
                <div>
                    <p>Search by Date</p>
                    <input type="text"></input>
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;