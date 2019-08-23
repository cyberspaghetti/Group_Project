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
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 400,
    minWidth: 400,
    height: 360
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
  }
}));

const cardButton = {
  color: "#00B9FF"
};

export default function Cards(props) {
  const [spacing, setSpacing] = React.useState(2)
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <Grid container className={classes.root} spacing={2}>
        <Grid container justify='center' spacing={spacing}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.posts.news_post_image}
            title="image"
          />
          <CardContent >
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
      </Grid>
      </Grid>
    </div>
  );
}
