import React from 'react';
import CardList from '../constants'
import Grid from "@material-ui/core/Grid";
import Card from "../components/Card"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft:"20px",
    paddingRight:'20px'
  }
});



export const Projects = () => {
  const classes = useStyles();

  const getProjectCard = (projectCard) => {
    const {title, subtitle, description, imgSrc} = projectCard
    return (
    <Grid item sm={4} xs={12}>
      <Card {...projectCard}/>
    </Grid>
    );
  }
  
  return (
    <div className='project-body'>
      <Grid container spacing={4} className = {classes.gridContainer} justify='center'>
        <Grid item project-header sm={12}>
            <br></br>
            <h1>Take a Look at My Projects!</h1>
        </Grid>

       
          {CardList.map(card => getProjectCard(card))} 
        


      </Grid>
    </div>
  );
};


export default Projects;