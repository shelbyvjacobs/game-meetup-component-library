import React, { Component } from "react";

export class EditMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: null,
        game: null,
        date: null,
        time: null,
        creator: null,
        location: null,
        description: null
    };
  }

  render() {
    return (
      <div>
        <form className="editMeetup">
          <button className="accordion">Edit this Meetup</button>
          <div className="panel">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="textInput"
            />
            <input
              type="text"
              name="game"
              placeholder="Game"
              className="textInput"
            />
            <input
              type="text"
              name="date"
              placeholder="Date (mm-dd-yyyy)"
              className="textInput"
            />
            <input
              type="text"
              name="time"
              placeholder="Time (e.g 4:00pm)"
              className="textInput"
            />
            <input
              type="text"
              name="creator"
              placeholder="Creator Name"
              className="textInput"
            />
            <input
              type="text"
              name="location"
              placeholder="Address"
              className="textInput"
            />
            <input
              type="text"
              name="description"
              placeholder="Meetup Description (e.g. Come to this fun meetup to play Scrabble!)"
              className="textInput"
            />
            <input type="submit" className="button panel" value="Edit this Meetup" />
          </div>
        </form>
      </div>
    );
  }
}

export default EditMeetup;
