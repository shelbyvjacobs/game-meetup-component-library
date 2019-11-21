import React from 'react';
import { storiesOf } from '@storybook/react';
import "./DeleteMeetup.css"
import DeleteMeetup from './DeleteMeetup';

storiesOf('Delete Meetup Form', module)
    .add('Delete Meetup Form', () => <DeleteMeetup 
        label= "Delete this Meetup"
    />)