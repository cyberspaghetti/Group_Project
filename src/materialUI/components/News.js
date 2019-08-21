import React, { Component } from "react";
import Cards from "./Cards";
import "./News.css";
import { Typography } from "@material-ui/core";
export default class News extends Component {
  render() {
    return (
      <div className="news-background">
        <div className="news-title">
          <Typography variant="h4">News</Typography>
        </div>
        <div className="cards-container">
          <Cards />
        </div>
        {this.props.children ? this.props.children : null}
      </div>
    );
  }
}
