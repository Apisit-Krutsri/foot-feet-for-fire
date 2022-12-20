import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import image from "../../img/Landing_Pic.svg";
import "./leftComponent.module.css";
import bgimg from "../../img/Dashboard_LeftNav_ProfileBG.svg";
import BoxInLeft from "./boxInLeft";
import { useState } from "react";

let { AgeFromDateString } = require("age-calculator");

function LeftComponent(props) {
  // รับ props มาจาก dashboard

  let age = new AgeFromDateString(props.birthday).age;
  // console.log("value from ageFromString", age);

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

  //set background color based on BMI range
  // const [color, setColor] = useState("bg-slate-100/80");


  /// BMR calculation function ===== BASED ON SEX!!
  function maleBMR(weight, height, age) {
    const num = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    return (Math.round(num * 100) / 100).toFixed(2);
  }

  function femaleBMR(weight, height, age) {
    const num = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    return Math.floor(Math.round(num * 100) / 100);
  }

  function calculateBMR(gender, weight, height, age) {
    if (gender === "female") {
      return femaleBMR(weight, height, age);
    } else {
      return maleBMR(weight, height, age);
    }
  }

  // use information from the user
  const bmr = calculateBMR(props.gender, props.weight, props.height, age);
  const bmi = calculateBMI(props.weight, props.height);

  // function BMIColor (bmi) {
  //   if (bmi < 18.5) {
  //     setColor("bg-cyan-400");
  //   } else if (bmi >= 18.5 && bmi <=24.9) {
  //     setColor("bg-lime-500")
  //   } else if (bmi > 24.9 && bmi <=29.9) {
  //     setColor("bg-yellow-400")
  //   } else if (bmi > 29.9 && bmi <=34.9) {
  //     setColor("bg-orange-400")
  //   } else {
  //     setColor("bg-red-500")
  //   }
  // }
  // BMIColor();

  return (
    <div className='flex justify-start'>
      <Container
        className='bg-slate-300 flex flex-col m-0 h-auto w-72 p-10 items-center'
        style={myStyle}
      >
        {/* profile image */}
        <img
          src={props.image}
          alt='avatar'
          width='100'
          className='border-white bg-white border-2 rounded-full h-32 w-32 flex items-center justify-center'
        />
        <Typography className='m-2 p-2 text-white font-bold'>
          {props.firstname} {props.lastname}{" "}
        </Typography>
        <Typography className='m-2 text-sm text-white'>
          PERSONAL INFORMATION
        </Typography>

        {/*Box component in file boxInLeft*/}
        <Box className='flex p-0 m-2 w-64 bg-slate-100/80 border-white border-2 rounded-md items-center justify-center'>
          {/* Height box */}
          <BoxInLeft text={"Height"} number={props.height} />

          {/* Weight box */}
          <BoxInLeft text={"Weight"} number={props.weight} />

          {/* Age box */}
          <BoxInLeft text={"Age"} number={age} />
        </Box>

        {/*Another 2 component boxes */}

        <Box className='flex p-0 m-2 w-64 bg-slate-100/80 border-white border-2 rounded-md items-center justify-center'>
          {/* <div className=""> */}
            <Box className='m-2 bg-white rounded-md'>
              <Box className='m-2'>BMI</Box>
            </Box>
          {/* </div> */}
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
