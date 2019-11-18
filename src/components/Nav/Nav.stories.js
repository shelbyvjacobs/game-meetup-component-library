import React from 'react';
import { storiesOf } from '@storybook/react';
import "./Nav.css"
import Nav from './Nav';
import { conditionalExpression } from '@babel/types';

storiesOf('Nav Bar', module)
    .add('Nav', () => <Nav 
        label="Nav" 
        type= "nav"
    />)