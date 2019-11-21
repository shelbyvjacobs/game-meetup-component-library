import React, { Component } from "react";

export class DeleteMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <form className="editMeetup">
          <button className="accordion">Delete This Meetup</button>
          <div className="panel">
            <p className="warning">Be careful! This action can't be undone.</p>
            <input type="submit" value="Delete this Meetup" className="button panel"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default DeleteMeetup;