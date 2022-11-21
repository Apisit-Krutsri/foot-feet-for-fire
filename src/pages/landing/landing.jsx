import React from "react";
import "./landing.css";
import { Typography, Button, Grid, Paper, Box } from "@mui/material";
import imagelanding from "../../img/landingpic.png";


function Landing() {

//example of dataset
  const quotes = {
    quote: [
      "this is quote number 1",
      "this is quote number 2",
      "this is quote number 3",
      "this is quote number 4",
      "this is quote number 5",
      "this is quote number 6",
    ],
  };

  const quotes2 = [
    {
      text: "Genius is one percent inspiration an ninety-nine percent perspiration.",
      author: "Thomas Edison",
    },
    {
      text: "You can observe a lot just by watching.",
      author: "Yogi Berra",
    },
  ];


  {/* ////////////////////////////////////// - JSX -//////////////////////////////////////// */} 
  
  return (
    <Box className="bigContainer">

    {/* Left side of Landing page */} 
      <Box className="leftContent">
        <h1 className="anim-typewriter">Your body can do it,</h1>
        <h1 className="anim-typewriter">it's time to convince your mind!</h1>
        <Box className="btn">
          <Button
            className="bg-black"
            id="button"
            type="submit"
            variant="contained"
          >
            Log In
          </Button>
          <Button
            className="bg-gray-200 text-green-400 border-green-400"
            id="button"
            type="submit"
            variant="outlined"
          >
            Sign Up
          </Button>
        </Box>
      </Box>

      {/* Woman image in Landing page */} 
      <img src={imagelanding} alt="landing-img" />


      {/* Right side of Landing page */} 
      <Box className="rightContent">
        <Grid container spacing={2} className="textbox">

        {/* First textbox AND JUST TRY RANDOM QUOTES */} 
          <Paper className="paper" elevation={6}>
                <Typography fontSize={24}>
                  {quotes2[Math.floor(Math.random() * 2)]["text"]}
                </Typography>
          </Paper>

          {/* Second textbox */} 
          <Paper className="paper" elevation={6}>
          <Typography fontSize={25}>“You've gotta dance like there's nobody watching,
          Love like you'll never be hurt,
          Sing like there's nobody listening,
          And live like it's heaven on earth.”
          ― William W. Purkey</Typography>
          </Paper>

          {/* Third textbox */} 
          <Paper className="paper" elevation={6}>
              <Grid item xl>
              <Typography fontSize={25}>Hello</Typography>
              </Grid>
          </Paper>
        </Grid>
      </Box>
    </Box>
  );
}

export default Landing;
