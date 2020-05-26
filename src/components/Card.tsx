import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import constants from "../constants";


const useStyles = makeStyles({
  root: {
    minWidth: 225,

  },
  headerStyle: {
    fontWeight: "bold",
    fontSize: "0.8rem",
    fontStyle: "italic"
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const [img, setImg] = useState("");

  const { title, bodyHeader, description, imgSrc } = props;

  return (
    
    <Card className={classes.root}>
      <CardHeader className={classes.headerStyle} title={title} />
      <CardMedia
        style={{ height: "150px" }}
        image={(imgSrc)}
      />
      <CardContent>
        <Typography variant="h6">{bodyHeader}</Typography>
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