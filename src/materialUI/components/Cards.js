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

export default function Cards() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_b74d60ee215337d765e4d20c8ca6710ae2362cc2.1920x1080.jpg?t=1550078557"
            title="image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Witcher Server Party
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Bring your friends and your enemies to our annual party over here
              on the Witcher Server! We will be serving digital milk.
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
