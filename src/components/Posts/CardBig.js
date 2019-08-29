import React, {Component} from "react";
// import clsx from 'clsx';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid'
import "./News.css";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { getPost } from '../../ducks/postReducer';
import './CardBig.css'

const remove = {
    textDecoration: 'none'
}

const card = {
    maxWidth: 850,
    minWidth: 850,
    height: 360,
    minHeight: 600,
    marginBottom: "100px",
    marginLeft: "560px",
    marginTop: '50px'
  }
  const media ={
    height: 350
  }

  const buttonStyle = {
    background: "#00b9ff",
    color: "#ffffff",
    marginTop: "20px",
    marginLeft: '30px'
  };

const titl = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
};

class CardBig extends Component{
    constructor(props){
    super(props)
    this.state={
        posts: [

        ]
    

    }
}

componentDidMount = () => {
    console.log('hit comp', this.props.match.params.cardId)
    this.props.getPost(this.props.match.params.cardId)
    this.setState({ post: this.props.posts.posts })
}

render(){
  console.log('cards', this.props);
  if (this.props.posts.post[0]){
      return (
          <div className='background'>
        <Link to='/' style={remove}><Button style={buttonStyle}>Back</Button></Link>
        <Card style={card} >
        <CardActionArea>
            <CardMedia
            style={media}
            image={this.props.posts.post[0].news_post_image}
            title="image"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2" >
                {this.props.posts.post[0].news_post_title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className='text'>
                {this.props.posts.post[0].news_post_body}
                <div className='blue'>{this.props.posts.post[0].news_post_date}</div>
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
        </Card>
        <div className='message'>

        </div>
</div>)
       }else{
      return(<div>loading</div>);
}
}
}
function mapStateToprops(state) {
  return { posts: state.posts };
}

export default connect(
  mapStateToprops,
  { getPost },
)(CardBig);