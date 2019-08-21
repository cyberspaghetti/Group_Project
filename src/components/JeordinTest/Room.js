import React, { Component } from "react";
import { connect } from "react-redux";

class Room extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    console.log("props", this.props);
    return (
      <div>
        <section >
          {this.props.obj.room_name}
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(Room);
