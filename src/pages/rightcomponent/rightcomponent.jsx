import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Container, Box } from "@mui/system";
import { Typography } from "@mui/material";

const RightComponent = () => {
  // const [day, setDay] = useState(dayjs("today"));

  return (
    <div>
      <Container className='h-screen border-2 shadow-xl bg-slate-100 w-auto flex flex-col content-center'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Typography className='mt-5 text-center font-bold'>
            Calendar 💌
          </Typography>
          <StaticDatePicker
            displayStaticWrapperAs='desktop'
            className='border-1 rounded-xl mt-2'
            // openTo='day'
            // value={day}
            // onChange={(newValue) => {
            //   setDay(newValue);
            // }}
            // renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Box className='flex flex-col content-center'>
          {/*ตรงนี้แยกเป็น 2 component ได้ */}
          <Box className='m-2 flex flex-col align-center justify-center'>
            <Typography className='m-2 text-center font-bold'>
              Goal 🎯
            </Typography>
            <Box className='p-0 m-0 bg-slate-50 border-green-600 border-2 rounded-md h-24 text-center'>
              This is goal
            </Box>
          </Box>

          <Box className='m-2 flex flex-col align-center justify-center'>
            <Typography className='m-2 text-center font-bold'>
              Motivation Quotes 💌
            </Typography>
            <Box className='p-0 m-0 bg-slate-50 border-green-600 border-2 rounded-md h-24 text-center'>
              This is quotes
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default RightComponent;
