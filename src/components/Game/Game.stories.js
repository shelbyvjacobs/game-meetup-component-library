import React from 'react';
import { storiesOf } from '@storybook/react';
import "./Game.css"
import Game from './Game';
import img from "./Game-img/fillmurray.jpg"
import { conditionalExpression } from '@babel/types';

storiesOf('Game Card', module)
    .add('Game Card', () => <Game
        type= "Game"
        img={img}
        info= "info"
    />)