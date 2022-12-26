import React from "react";
import {Box} from '@mui/material'

const BoxInLeft = (props) => {
  return (
    <Box className='m-2'>
      <Box className="font-bold">{props.text}</Box>
      <Box>{props.number}</Box>
    </Box>
  );
};

export default BoxInLeft;
