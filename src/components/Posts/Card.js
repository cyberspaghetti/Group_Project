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
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 450
  },
  media: {
    height: 215
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
  }
}));

const cardButton = {
  color: "#00B9FF"
};

export default function Cards(props) {
  const classes = useStyles();
  const theme = useTheme();
  console.log('console in cards', props);
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.posts.news_post_image}
            title="image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.posts.news_post_title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.posts.news_post_body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" style={cardButton}>
            Visit Server
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

