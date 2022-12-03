import { Container, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import image from "../../img/Landing_Pic.svg";
import "./leftComponent.module.css";
import bgimg from "../../img/Dashboard_LeftNav_ProfileBG.svg";
import BoxInLeft from "./boxInLeft";
// import {useState} from 'react';

function LeftComponent() {

  const myStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  /// BMI calculation function (weight=kg, height=cm)
  function calculateBMI(weight, height) {
    const num = (weight / height / height) * 10000;
    return (Math.round(num * 100) / 100).toFixed(2);
  }

  /// BMR calculation function ===== BASED ON SEX!!
  function maleBMR(weight,height,age) {
    const num = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    return (Math.round(num * 100) / 100).toFixed(2);
  }

  function femaleBMR (weight,height,age) {
    const num = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    return Math.floor(Math.round(num * 100) / 100)
  }

  function calculateBMR (sex,weight,height,age) {
    if (sex === "woman") {
      return femaleBMR(weight,height,age);
    } else {
      return maleBMR(weight,height,age);
    }
  }

  //////////////////////////////////////////////// MAKE DATA //////////////////////////////
  const bmr = calculateBMR("woman",44,158,26);
  const bmi = calculateBMI(44,158); 


  return (
    <div className='flex justify-start'>
      <Container
        className='bg-slate-300 flex flex-col m-0 h-auto w-72 p-10 items-center'
        style={myStyle}
      >
        {/* profile image */}
        <img
          src={image}
          alt='avatar'
          width='100'
          className='border-white bg-white border-2 rounded-full h-32 w-32 flex items-center justify-center'
        />
        <Typography className='m-2 p-2 text-white font-bold'>
          Sharon Kim
        </Typography>
        <Typography className='m-2 text-sm text-white'>
          PERSONAL INFORMATION
        </Typography>

        {/*Box component in file boxInLeft*/}
        <Box className='flex p-0 m-2 w-64 bg-slate-100/80 border-white border-2 rounded-md items-center justify-center'>
          {/* Height box */}
          <BoxInLeft text={"Height"} number={"00000"}/>

          {/* Weight box */}
          <BoxInLeft text={"Weight"} number={"00000"}/>

          {/* Age box */}
          <BoxInLeft text={"Age"} number={"00000"}/>
        </Box>

        {/*Another 2 component boxes */}
        <Box className='flex p-0 m-2 w-64 bg-slate-100/80 border-white border-2 rounded-md items-center justify-center'>
          <Box className='m-2 bg-white rounded-md'>
            <Box className='m-2'>BMI</Box>
          </Box>
          <Box className='m-2'>{bmi} kg/m&#178;</Box>
        </Box>

        <Box className='flex p-0 m-2 w-64 bg-slate-100/80 border-white border-2 rounded-md items-center justify-center'>
          <Box className='m-2 bg-white rounded-md'>
            <Box className='m-2'>BMR</Box>
          </Box>
          <Box className='m-2'>{bmr} calories/day</Box>
        </Box>
      </Container>
    </div>
  );
}

export default LeftComponent;
