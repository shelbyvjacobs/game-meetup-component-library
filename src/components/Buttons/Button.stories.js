import React from 'react';
import { storiesOf } from '@storybook/react';
import "./Button.css"
import Button from './Button';
import { conditionalExpression } from '@babel/types';

storiesOf('Button', module)
// basic buttons
    .add('Primary', () => <Button 
        label="Primary" 
        type= "primary"
    />)
    .add('Primary Medium', () => <Button 
        label="Primary"
        type="primary"
        medium
    />)
    .add('Primary Large', () => <Button 
        label="Primary"
        type="primary"
        large
    />)