import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import IconButton from '@material-ui/core/IconButton';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';

const useStyles = makeStyles({
  root: {
    minWidth: 225,
  },
  header-style: {
    text-align: center,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;
//   const header = <h1 className = {classes.header}></h1>

  const {title, subtitle, description, imgSrc} = props;
  return (
    <Card className={classes.root}>
        <CardHeader 
            className = {classes.header-style}
        
            action={
            <IconButton aria-label="settings">
                <SentimentSatisfiedAltIcon />
            </IconButton>
            }
            title={title}
            subheader={subtitle}
      />
      <CardMedia
        style = {{height: '150px'}}
        //className={classes.media}
        image={imgSrc}
      />
      <CardContent>
       
        <Typography variant="body2" component="p">
            {description}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}