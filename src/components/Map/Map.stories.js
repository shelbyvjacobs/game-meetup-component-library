import React from 'react';
import { storiesOf } from '@storybook/react';
import Map from './Map';
import { conditionalExpression } from '@babel/types';

storiesOf('Map', module)
    .add('Map', () => <Map
        type= "Map"
    />)