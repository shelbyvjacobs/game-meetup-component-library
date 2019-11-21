import React from 'react';
import { storiesOf } from '@storybook/react';
import "./NewMeetup.css"
import NewMeetup from './NewMeetup';

storiesOf('New Meetup Form', module)
    .add('New Meetup Form', () => <NewMeetup 
        label= "Create a Meetup"
    />)

