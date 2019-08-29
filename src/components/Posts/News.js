import React, { Component } from "react";
import CardMap from "./CardMap";
import "./News.css";
import { createPost, editPost } from "../../ducks/postReducer";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import GifSearch from "../gifSearch/gifSearch";
import { stringify } from "querystring";
import Cardedit from "./Cardedit";
import Button from "@material-ui/core/Button";
const buttonStyle = {
  background: "#00b9ff",
  color: "#ffffff",
  marginTop: "20px"
};
class News extends Component {
  constructor() {
    super();
    this.state = {
      news_post_title: "",
      news_post_image: "",
      news_post_body: "",
      news_post_date: "",
      display_menu: false,
      display_edit: false
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.prevState != this.state) this.render();
  }
  date = () => {
    let date = new Date();
    let dateToString = date.toLocaleDateString();
    return this.setState({ news_post_date: `${dateToString}` });
  };
  showPostMenu = () => {
    this.setState({ display_menu: !this.state.display_menu });
  };
  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    this.date();
  };
  createPost = () => {
    let user_id = this.props.user.user.user_id;
    let {
      news_post_title,
      news_post_image,
      news_post_body,
      news_post_date
    } = this.state;
    this.props.createPost(
      user_id,
      news_post_title,
      news_post_image,
      news_post_body,
      news_post_date
    );
    this.showPostMenu();
  };
  grabGif = gif => {
    this.setState({ news_post_image: gif });
  };
  render() {
    let { news_post_body, news_post_title, news_post_image } = this.state;
    let { display_menu, display_edit } = this.state;
    return (
      <div className="news-background">
        <div className="news-title">
          <Typography variant="h4">Galactic News</Typography>
        </div>
        <section className="create-post-container">
          {display_menu ? (
            <div className="display-menu">
              <form className="display-info-container">
                <div className="group">
                  <input
                    onChange={this.handleChange}
                    name="news_post_title"
                    value={news_post_title}
                  required/>
                  <span className="highlight" />
                  <span className="bar" />
                  <label className="label">Title</label>
                </div>
                <div className="group">
                  <input
                    name="news_post_body"
                    onChange={this.handleChange}
                    value={news_post_body}
                    required/>
                  <span class="highlight" />
                  <span class="bar" />
                  <label className="label">Content</label>
                </div>
                <div className="news-button-container">
                  <Button style={buttonStyle} onClick={this.createPost}>
                    Let's Do This
                  </Button>
                  <Button style={buttonStyle} onClick={this.showPostMenu}>
                    Forget It
                  </Button>
                </div>
                <Cardedit state={this.state} />
              </form>
              <div className="gif-search-container">
                <GifSearch grabGif={this.grabGif} />
              </div>
            </div>
          ) : (
            <Button style={buttonStyle} onClick={this.showPostMenu}>
              {" "}
              Add Some News{" "}
            </Button>
          )}
        </section>
        <div>
          <CardMap updatePost={this.updatePost} />
        </div>
        {this.props.children ? this.props.children : null}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts, user: state.user };
}
export default connect(
  mapStateToProps,
  { createPost, editPost }
)(News);
