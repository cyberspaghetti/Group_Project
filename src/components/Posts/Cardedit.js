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
import "./News.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 400,
    minWidth: 400,
    height: 360,
    margin: 4
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
  fontSize: '12px',
  color: "#00B9FF",
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
};

export default function Cards(props) {
  const [spacing, setSpacing] = React.useState(2)
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <Grid items className={classes.root} spacing={2}>
        <Grid items justify='center' spacing={spacing}>
      <Card className={classes.card}>
        <CardActionArea>
          Preview
          <CardMedia
            className={classes.media}
            image={props.state.news_post_image}
            title="image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.state.news_post_title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.state.news_post_body}
            </Typography>
          </CardContent>
        </CardActionArea >
        <CardActions style={cardButton}>
          <Button size="small" style={cardButton}>
          Remove
          </Button>
        {props.state.news_post_date}
        </CardActions>
      </Card>
      </Grid>
      </Grid>
    </div>
  );
}
