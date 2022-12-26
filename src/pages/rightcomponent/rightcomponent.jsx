import * as React from "react";
import { Container, Box } from "@mui/system";
import { Typography } from "@mui/material";
import BMI from "../activitySummary/BMI";

const RightComponent = (props) => {

  return (
    <div>
      <Container className='h-screen border-2 shadow-xl w-auto flex flex-col content-center bg-zinc-700'>
        <div className='flex flex-col mt-10 h-72 rounded-md content-center justify-center bg-cover m-2 border-6 bg-slate-100/80 border-solid border-2 border-white p-5'>
          <div className='justify-center '>
            <BMI bmi={props.bmi} />
          </div>
        </div>
        <Box className='flex flex-col content-center'>
          {/*ตรงนี้แยกเป็น 2 component ได้ */}
          <Box className='m-2 flex flex-col align-center justify-center'>
            <Typography className='m-2 text-center font-bold text-white'>
              Goal 🎯
            </Typography>
            <Box className='pt-6 m-0 bg-slate-100/80 border-white border-2 rounded-md h-24 text-center font-bold'>
              {props.number} {props.goal} / {props.selectGoal}
            </Box>
          </Box>

          <Box className='m-2 flex flex-col align-center justify-center'>
            <Typography className='m-2 text-center font-bold text-white'>
              Motivation Quote 💌
            </Typography>
            <Box className='pt-6 m-0 bg-slate-100/80 border-white border-2 rounded-md h-24 text-center font-bold'>
              {props.quote}
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default RightComponent;
