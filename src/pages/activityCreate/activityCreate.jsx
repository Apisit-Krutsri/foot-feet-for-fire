import {
  Typography,
  TextField,
  Input,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Box,
} from "@mui/material";
import "./create.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CreateAlert from "./CreateAlert";
import axios from "axios";

function ActivityCreate() {
  /*set states*/
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [firstTime, setFirstTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [sport, setSport] = useState("");
  const [description, setDescription] = useState("");

  const [list, setList] = useState([]); //list = array contains object(s) of information
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    severity: "",
  });

  /*set conditions when click save button*/
  const submitData = (e) => {
    e.preventDefault();
    if (!name && !date && !firstTime && !toTime && !sport && !description) {
      console.log("no nameeeee");
      setAlert({
        show: true,
        msg: "You must complete all fields ",
        severity: "error",
      });
    } else {
      const newItem = {
        id: uuidv4(),
        title: name,
        date: date,
        firstTime: firstTime,
        toTime: toTime,
        sport: sport,
        description: description,
      };
      axios
        .post(
          "https://foot-feet-default-rtdb.asia-southeast1.firebasedatabase.app/cardactivity.json",
          newItem
        )
        .then((res) => {
          console.log(res.data);
        });

      setList([...list, newItem]);
      setName("");
      setDate("");
      setFirstTime("");
      setToTime("");
      setSport("");
      setDescription("");
      setAlert({
        show: true,
        msg: "Your activity was saved",
        severity: "success",
      });
      console.log(newItem);
    }
  };

  /*set conditions when click save button*/
  const cancel = () => {
    setName("");
    setDate("");
    setFirstTime("");
    setToTime("");
    setSport("");
    setDescription("");
    // setOpen('hidden')
  };

  return (
    <div>
      <div>
        <Box className='flex flex-col w-96 m-2 bg-lime-200 rounded-3xl'>
          <Typography className='text-center p-5 font-bold text-xl'>
            Create Activity
          </Typography>

          {/*Choose Image*/}
          <input
            className='mx-3 p-1 rounded-md block'
            type='file'
            name='myImage'
            accept='image/x-png,image/gif,image/jpeg'
          ></input>

          {/*Add Activity Name*/}
          <InputLabel className='px-3 py-1 text-sm'>Activity Name</InputLabel>
          <TextField
            className='mx-3 bg-slate-50'
            size='small'
            required
            id='outlined-required'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          {/*Select Date*/}
          <InputLabel className='px-3 py-1 text-sm'>Date</InputLabel>
          <Input
            className='mx-3 p-1 bg-slate-50 rounded-md'
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></Input>

          {/*Select Time Range*/}
          <Box>
            <InputLabel className='px-3 pt-1 text-sm'>Time</InputLabel>
          </Box>
          <Box className='flex my-1 content-center'>
            <Input
              className='mx-3 px-5 bg-slate-50 rounded-md'
              type='time'
              value={firstTime}
              onChange={(e) => setFirstTime(e.target.value)}
            ></Input>
            <InputLabel className='px-1 py-1 text-sm'>to</InputLabel>
            <Input
              className='ml-2 px-5 bg-slate-50 rounded-md'
              type='time'
              value={toTime}
              onChange={(e) => setToTime(e.target.value)}
            ></Input>
          </Box>

          {/*Select Sport Type*/}
          <InputLabel className='px-3 py-0 text-sm'>Sport</InputLabel>
          <Select
            className='mx-3 my-1 bg-slate-50 rounded-md'
            id='demo-simple-select'
            label='Sport'
            size='small'
            value={sport}
            onChange={(e) => setSport(e.target.value)}
          >
            <MenuItem value={"running"}>Running</MenuItem>
            <MenuItem value={"swimming"}>Swimming</MenuItem>
            <MenuItem value={"hiking"}>Hiking</MenuItem>
          </Select>

          {/*Add Activity Description*/}
          <InputLabel className='px-3 py-1 text-sm'>Description</InputLabel>
          <TextField
            className="mx-3 bg-slate-50 rounded-md'"
            required
            id='outlined-required'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={2}
          />

          {/*Alert will place here, types of Alert will based on conditions*/}
          {alert.show && (
            <CreateAlert {...alert} setAlert={setAlert} list={list} />
          )}

          {/*Button*/}
          <Box className='flex m-3 content-center justify-center'>
            <Button
              className='bg-lime-600 h-8 w-20 m-3'
              variant='contained'
              type='submit'
              onClick={submitData}
            >
              Save
            </Button>
            <Button
              className='bg-red-600 h-8 w-20 m-3'
              variant='contained'
              type='submit'
              onClick={cancel}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </div>

      {/*    <section className="list-container">
    {list.map((data, index)=> {return <CardComponent key={index} {...data} />})}
  </section>*/}
    </div>
  );
}

export default ActivityCreate;
