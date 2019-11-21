import React from 'react';
import { storiesOf } from '@storybook/react';
import "./JoinMeetup.css"
import JoinMeetup from './JoinMeetup';

storiesOf('Join Meetup Form', module)
    .add('Join Meetup Form', () => <JoinMeetup 
        label= "Join"
    />)