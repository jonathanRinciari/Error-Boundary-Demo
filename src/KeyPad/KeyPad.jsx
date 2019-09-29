import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowPad from './ArrowPad';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 275,
    marginTop: 32
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const KeyPad = ({matcher}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Type the following Pattern
        </Typography>
        <Typography variant="h5" component="h2">
         {matcher}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          An error will be thrown
        </Typography>
        <ArrowPad matcher={matcher} />
      </CardContent>
    </Card>
  );
};

export default KeyPad;