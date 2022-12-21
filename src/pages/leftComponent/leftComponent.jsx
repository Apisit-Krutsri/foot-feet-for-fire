import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import image from "../../img/Landing_Pic.svg";
// import bgimg from "../../img/Dashboard_LeftNav_ProfileBG.svg";
import bgimg from "../../img/pngegg.png";
// import bgimg from '../../img/bikewomen.png'
import BoxInLeft from "./boxInLeft";
let { AgeFromDateString } = require("age-calculator");

function LeftComponent(props) {

  // change birthday to age
  let age = new AgeFromDateString(props.birthday).age;
  console.log(age)

  const myStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 400,
    backgroundPosition: "bottom"
  };

  /// BMI calculation function (weight=kg, height=cm)
  function calculateBMI(weight, height) {
    const num = (weight / height / height) * 10000;
    return (Math.round(num * 100) / 100).toFixed(2);
  }

  /// BMR calculation function, based on gender
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

  return (
    <div className='flex justify-start bg-zinc-700'>
      <Container
        className='flex flex-col m-0 h-auto w-80 p-10 items-center'
        style={myStyle}
      >
        {/* profile image */}
        <img
          src={props.image ? props.image : image}
          alt='avatar'
          width='100'
          className='border-white bg-white border-2 rounded-full h-32 w-32 flex items-center justify-center'
        />
        <Typography className='m-2 p-2 text-white font-bold text-2xl'>
          {props.firstname ? props.firstname : "name"} {props.lastname ? props.lastname : "lastname"}{" "}
        </Typography>
        <Typography className='m-2 text-sm text-white'>
          PERSONAL INFORMATION
        </Typography>

        {/*Box component in file boxInLeft*/}
        <Box className='flex p-0 m-2 w-64 bg-slate-100/80 border-white border-2 rounded-md items-center justify-center'>
          {/* Height box */}
          <BoxInLeft text={"Height"} number={props.height ? props.height : 0} />

          {/* Weight box */}
          <BoxInLeft text={"Weight"} number={props.weight ? props.weight : 0} />

          {/* Age box */}
          <BoxInLeft text={"Age"} number={age ? age : 0} />
        </Box>

        {/*Another 2 component boxes */}
        <Box className='flex p-0 m-2 w-64 pl-5 bg-slate-100/80 border-white border-2 rounded-md items-center'>
            <Box className='m-2 bg-white rounded-md'>
              <Box className='m-2 font-bold'>BMI</Box>
            </Box>
          <Box className='m-2'>{bmi ? bmi : 0} kg/m&#178;</Box>
        </Box>

        <Box className='flex p-0 m-2 w-64 pl-5 bg-slate-100/80 border-white border-2 rounded-md items-center'>
          <Box className='m-2 bg-white rounded-md'>
            <Box className='m-2 font-bold'>BMR</Box>
          </Box>
          <Box className='m-2'>{bmr ? bmr : 0} calories/day</Box>
        </Box>
      </Container>
    </div>
  );
}

export default LeftComponent;
