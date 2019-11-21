import React from 'react';
import { storiesOf } from '@storybook/react';
import "./Nav.css"
import Nav from './Nav';

storiesOf('Nav Bar', module)
    .add('Nav', () => <Nav 
        label="Nav"
    />)