import React from "react";
import style from "./landing.module.css";
import { Typography, Grid, Paper, Box } from "@mui/material";
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
    <Box className={style.bigContainer}>

    {/* /////////////////// Left side of Landing page ///////////////////*/} 
      <Box className={style.leftContent}>
      <Box className={style.textcontainer}>
        <h1 className={style.text} >Your body can do it,</h1>
        <h1 className={style.text}>it's time to convince your mind!</h1>
        </Box>
        <Box className={style.btn}>
          <button
            className={style.leftbutton}
            id="button"
            type="submit"
            variant="contained"
          >
            Log In
          </button>
          <button
            className={style.rightbutton}
            id="button"
            type="submit"
            variant="outlined"
          >
            Sign Up
          </button>
        </Box>
      </Box>

      {/* Woman image in Landing page */} 
      <img className={style.image} src={imagelanding} alt="landing-img" />


      {/* /////////////////// Right side of Landing page //////////////// */} 
      <Box className={style.rightContent}>
        <Grid container spacing={2} className={style.textbox}>

        {/* First textbox AND JUST TRY RANDOM QUOTES */} 
          <Paper className={style.paper} elevation={6}>
                <Typography fontSize={24}>
                  {quotes2[Math.floor(Math.random() * 2)]["text"]}
                </Typography>
          </Paper>

          {/* Second textbox */} 
          <Paper className={style.paper} elevation={6}>
          <Typography fontSize={25}>“You've gotta dance like there's nobody watching,
          Love like you'll never be hurt,
          Sing like there's nobody listening,
          And live like it's heaven on earth.”
          ― William W. Purkey</Typography>
          </Paper>

          {/* Third textbox */} 
          <Paper className={style.paper} elevation={6}>
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