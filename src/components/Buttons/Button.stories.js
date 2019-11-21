import React from 'react';
import { storiesOf } from '@storybook/react';
import "./Button.css"
import Button from './Button';

storiesOf('Button', module)
    .add('Button', () => <Button 
        label="Join!" 
        type= "button"
    />)