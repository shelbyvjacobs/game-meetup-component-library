import React from 'react';
import { storiesOf } from '@storybook/react';
import "./EditMeetup.css"
import EditMeetup from './EditMeetup';

storiesOf('Edit Meetup Form', module)
    .add('Edit Meetup Form', () => <EditMeetup 
        label= "Edit this Meetup"
    />)