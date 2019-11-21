import React from 'react';
import { storiesOf } from '@storybook/react';
import "./Map.css"
import Map from './Map';

storiesOf('Map', module)
    .add('Map', () => <Map 
        type= "map"
    />)