import React from 'react';
import { storiesOf } from '@storybook/react';
import "./TextForm.css"
import TextForm from "./TextForm"
import { conditionalExpression } from '@babel/types';

storiesOf('Text Form', module)
    .add('Email', () => <TextForm  
        label="Email" 
        type="textForm"
    />)
    .add('Username', () => <TextForm  
        label="Username"
        type="textForm"
    />)
    .add('Password', () => <TextForm  
        label="Email"
        type="textForm"
    />)