import React from 'react';
import { storiesOf } from '@storybook/react';
import "./SearchBar.css"
import SearchBar from './SearchBar';
import { conditionalExpression } from '@babel/types';

storiesOf('Search Bar', module)
    .add('Search Bar', () => <SearchBar
        label="Search" 
        type= "searchBar"
    />)