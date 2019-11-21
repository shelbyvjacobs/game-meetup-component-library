import React, { Component } from "react";

export class JoinMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="textInput"
        ></input>
        <input type="submit" value="Join" className="button"></input>
      </form>
    );
  }
}

export default JoinMeetup;