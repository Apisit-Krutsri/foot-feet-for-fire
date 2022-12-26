import React from "react";
import style from "./landing.module.css";
import { Typography, Grid, Paper, Box } from "@mui/material";
import imagelanding from "../../img/landing-modified_3.svg";
import { Link } from "react-router-dom";

function Landing() {

  return (
    <div>
    <Box className={style.bigContainer}>
      {/* /////////////////// Left side of Landing page ///////////////////*/}
      <Box>
        <Box className={style.textcontainer}>
          <h1 className={style.text}>Your body can do it,</h1>
          <h1 className={style.text}>it's time to convince your mind!</h1>
        </Box>

        {/*Buttons */}
        <Box className={style.btn}>
          <button
            className={style.leftbutton}
            id='button'
            type='submit'
            variant='contained'
          >
           <Link to='/signin'>Sign In</Link>
          </button>
          <button
            className={style.rightbutton}
            id='button'
            type='submit'
            variant='outlined'
          >
            <Link to='/signup'>Sign Up</Link>
          </button>
        </Box>
      </Box>


      {/* /////////////////// Right side of Landing page //////////////// */}
      <div className={style.rightcontainer}>
      <img src={imagelanding} alt='landing-img' />
      </div>
    </Box>
    </div>
  );
}

export default Landing;
