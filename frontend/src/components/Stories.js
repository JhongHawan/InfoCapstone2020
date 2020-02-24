import React from 'react';
// import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, Box } from '@material-ui/core';
// import StoryCard from './StoryCard';
import StoryCard from './StoryCard';

function Stories() {
  return (
    <div >
      <Box className="sectionGradient">
        <Box className="heading1">
          <h1 className="bigTitle titleCenter">STORIES</h1>
          <h6 className="titleCenter">Putting the faces to the crisis</h6>
        </Box>

      </Box>
      {/* <h1>Stories Page</h1> */}
      <Grid container className="heading1" spacing={2}>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_2.svg" details="A, 29"/>
        </Grid>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_1.svg"details="J, 49"/>
        </Grid>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_3.svg" details="X, 19"/>
        </Grid>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_1.svg" details="B, 20"/>
        </Grid>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_2.svg" details="C, 35"/>
        </Grid>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_3.svg" details="H, 55"/>
        </Grid>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_3.svg" details="D, 34"/>
        </Grid>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_1.svg" details="G, 23"/>
        </Grid>

      </Grid>

    </div>
  );
}

export default Stories; 
