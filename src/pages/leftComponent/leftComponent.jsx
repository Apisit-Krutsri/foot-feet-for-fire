import { Container, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import image from "../../img/Landing_Pic.svg";
import "./leftComponent.module.css";
import bgimg from "../../img/Dashboard_LeftNav_ProfileBG.svg";

function LeftComponent() {
  const myStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  /// BMI calculation function (weight=kg, height=cm)
 function calculateBMI (weight, height) {
    return weight / height / height * 10000
  };

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


         {/*Box component x3 **SHOULD REFACTOR LATER**/}
        <Box className='flex p-0 m-2 w-64 bg-slate-100/80 border-white border-2 rounded-md items-center justify-center'>
         {/* Height box */}
          <Box className='m-2'>
            <Box>height</Box>
            <Box>height 00</Box>
          </Box>

        {/* Height box */}
          <Box className='m-2'>
            <Box>weight</Box>
            <Box>weight 00</Box>
          </Box>

        {/* Age box */}
          <Box className='m-2'>
            <Box>age</Box>
            <Box>age 00</Box>
          </Box>
        </Box>

        {/*Another 2 component boxes */}
        <Box className='flex p-0 m-2 w-64 bg-slate-100/80 border-white border-2 rounded-md items-center justify-center'>
          <Box className='m-2 bg-white rounded-md'>
            <Box className='m-2'>BMI</Box>
          </Box>
          <Box className='m-2'>00</Box>
        </Box>

        <Box className='flex p-0 m-2 w-64 bg-slate-100/80 border-white border-2 rounded-md items-center justify-center'>
          <Box className='m-2 bg-white rounded-md'>
            <Box className='m-2'>BMR</Box>
          </Box>
          <Box className='m-2'>00</Box>
        </Box>
      </Container>
    </div>
  );
}

export default LeftComponent;
