import React from "react";
// import clsx from 'clsx';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./News.css";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: 400,
    minWidth: 400,
    height: 360,
    marginBottom: "100px",
    marginLeft: "85px"
  },
  media: {
    height: 200
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 150
  },
  cardHover: {
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    "&:hover": {
      boxShadow:
        "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)"
    }
  }
}));

const extraCardStyle = {
  overflowY: "auto",
  padding: "5px 15px"
};

const cardButton = {
  fontSize: '12px',
  color: "#00B9FF",
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
};
const titl = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
};
export default function Cards(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const theme = useTheme();
  // console.log('cards',props);
  return (
    <div>
      <Grid items className={classes.root} spacing={2}>
        <Grid items justify="center" spacing={spacing}>
          <Card
            className={`${classes.card} ${classes.cardHover}`}
            style={extraCardStyle}
          >
            <CardActionArea>
              <Link to={`/card/${props.posts.news_post_id}`}>
                <CardMedia
                  className={classes.media}
                  image={props.posts.news_post_image}
                  title="image"
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" >
                  {props.posts.news_post_title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.posts.news_post_body}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={cardButton}>
              <Button size="small" style={cardButton} onClick={() => props.removePost(props.posts.user_id, props.posts.news_post_id)}>
                Remove
          </Button>
              {props.posts.news_post_date}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}


