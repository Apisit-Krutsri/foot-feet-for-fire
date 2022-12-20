import React from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Radio,
} from "@mui/material";
import "./profileEdit.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import RadioGroup from "@mui/material/RadioGroup";
import axios from "axios";
import CreateAlert from "../activityCreate/CreateAlert";
import { v4 as uuidv4 } from "uuid";

import { useJwt } from "react-jwt";
import jwt_decode from "jwt-decode";

const ProfileEdit = () => {

  const token = localStorage.getItem("token")
  const decoded = jwt_decode(token);
  const navigate = useNavigate();

  const [selectGoal, setSelectGoal] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [quote, setQuote] = useState("");
  const [goal, setGoal] = useState("");
  const [num, setNum] = useState("");

  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    severity: "",
  });

  const inputFname = (e) => {
    setFname(e.target.value);
  };

  const inputLname = (e) => {
    setLname(e.target.value);
  };

  const inputWeight = (e) => {
    setWeight(e.target.value);
  };

  const inputHeight = (e) => {
    setHeight(e.target.value);
  };

  const inputGender = (e) => {
    setGender(e.target.value);
  };

  const inputBirth = (e) => {
    setBirth(e.target.value);
  };

  ///Changes of kcal or time
  const inputNum = (e) => {
    setNum(e.target.value);
  };

  const inputSelectGoal = (e) => {
    setSelectGoal(e.target.value);
  };

  const inputQuote = (e) => {
    setQuote(e.target.value);
  };

  const clickRadioGoal = (e) => {
    setGoal(e.target.value);
  };

  // when click "submit", the the data will be saved
  const saveProfile = (event) => {
    event.preventDefault();
    if (!(fname && lname && weight && height && gender && birth && quote && goal && selectGoal && num)) {
      console.log("no nameeeee");
      setAlert({
        show: true,
        msg: "You must complete all fields ",
        severity: "error",
      });
    }else {

    const profileData = {
      uuidprofile: uuidv4(),
      firstName: fname, 
      lastName: lname,
      weight: weight,
      height: height,
      gender: gender,
      birthday: birth,
      quote: quote,
      goal: goal,
      selectGoal: selectGoal,
      number: num,
      creator: decoded._id,
    };
    console.log(profileData);

    axios.post(`${process.env.REACT_APP_API}/profile`, profileData
    ).then((res) => {
      console.log(res.data);
      navigate("/dashboard");
    }).catch(err=> {
      console.log(err)
    });
  }};

  return (
    <div className='mt-2'>
      <div className='w-1/2 bg-green-50 drop-shadow-lg mx-auto rounded-lg p-6 min-w-min'>
        <Typography
          variant='h4'
          className='text-green-600 text-3xl text-center font-semibold '
        >
          Create Profile
        </Typography>

        {/*Choose Image*/}
        <div className='flex justify-center my-5'>
          <input
            className='mx-3 p-1 rounded-md block'
            type='file'
            name='myImage'
            accept='image/x-png,image/gif,image/jpeg'
          ></input>
        </div>

        {/*First Name*/}
        <Box className='flex flex-wrap mt-2  justify-around mx-5'>
          <div className='mt-2 '>
            <label
              htmlFor='first_name'
              className=' block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Firstname
            </label>
            <TextField
              id='outlined-required'
              size='small'
              className='w-80 bg-slate-50'
              value={fname}
              onChange={inputFname}
            />
          </div>

          {/*Last Name*/}
          <div className='mt-2 '>
            <label
              htmlFor='last_name'
              className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Lastname
            </label>
            <TextField
              value={lname}
              className='w-80 bg-slate-50'
              id='outlined-required'
              size='small'
              onChange={inputLname}
            />
          </div>
        </Box>

        {/*Weight*/}
        <Box className='flex flex-wrap mt-2 justify-around  mx-5'>
          <div className='mt-2 '>
            <label
              htmlFor='weight-kg'
              className=' block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Weight (kg)
            </label>
            <TextField
              id='outlined-required'
              size='small'
              className='w-80 bg-slate-50'
              type='number'
              value={weight}
              onChange={inputWeight}
            />
          </div>

          {/*Height*/}
          <div className='mt-2 '>
            <label
              htmlFor='height-cm'
              className='block mb-1 text-sm font-medium text-gray-900 dark:text-white bg-slate-50'
            >
              Height (cm)
            </label>
            <TextField
              className='w-80 bg-slate-50'
              id='outlined-required'
              type='number'
              size='small'
              value={height}
              onChange={inputHeight}
            />
          </div>
        </Box>

        {/*Gender*/}
        <Box className='flex flex-wrap mt-2 justify-around  mx-5'>
          <div className='mt-2 '>
            <label
              htmlFor='gender'
              className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Gender
            </label>

            <Select
              size='small'
              value={gender}
              onChange={inputGender}
              className='w-80 bg-slate-50'
            >
              <MenuItem value={"male"}>Male </MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </div>

          {/*Date of Birth*/}
          <div className='mt-2 '>
            <label
              htmlFor='height-cm'
              className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Date of Birth
            </label>
            <TextField
              className='w-80 bg-slate-50'
              size='small'
              id='date'
              type='date'
              value={birth}
              onChange={inputBirth}
              defaultValue='00-00-00'
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </Box>

        {/*Motivation Quote*/}
        <Box className='flex flex-wrap mt-2 justify-around mx-5 '>
          <div className='mt-2  w-full'>
            <label
              htmlFor='Motivation'
              className=' block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Motivation quote for yourself
            </label>
            <TextField
              className='bg-slate-50'
              id='outlined-required'
              size='small'
              rows={4}
              multiline
              fullWidth
              value={quote}
              onChange={inputQuote}
            />
          </div>
        </Box>

        {/*GOAL*/}
        <Box className='flex flex-wrap mt-3 justify-around mx-5'>
          <div className='w-full'>
            <label
              htmlFor='time'
              className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Set Goal
            </label>
            {/*CALORIES*/}
            <RadioGroup>
              <div className='items-center flex flex-wrap w-full'>
                <div className='items-center flex mt-2'>
                  <Radio
                    value='calories'
                    name='radio-buttons'
                    inputProps={{ "aria-label": "controlled" }}
                    label='Calories'
                    onClick={clickRadioGoal}
                  />
                  <label
                    htmlFor='calories'
                    className=' block mb-1 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Calories
                  </label>
                </div>
                <Select
                  size='small'
                  value={selectGoal}
                  onChange={inputSelectGoal}
                  className='w-28 mr-2 ml-2 bg-slate-50'
                  disabled={goal === "minutes"}
                >
                  <MenuItem value='day'>Day </MenuItem>
                  <MenuItem value='week'>Week</MenuItem>
                </Select>
                <TextField
                  className='w-72 ml-4 bg-slate-50'
                  id='outlined-required'
                  size='small'
                  placeholder='kcal'
                  type='number'
                  disabled={goal === "minutes"}
                  value={num}
                  onChange={inputNum}
                />
              </div>

              {/*TIME*/}
              <div className='items-center flex flex-wrap w-full'>
                <div className='items-center flex mt-2'>
                  <Radio
                    value='minutes'
                    name='radio-buttons'
                    inputProps={{ "aria-label": "controlled" }}
                    label='minutes'
                    onClick={clickRadioGoal}
                  />
                  <label
                    htmlFor='minutes'
                    className=' block mb-1 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Time
                  </label>
                </div>
                <Select
                  size='small'
                  value={selectGoal}
                  onChange={inputSelectGoal}
                  className='w-28 mr-2 ml-2 bg-slate-50'
                  disabled={goal === "calories"}
                >
                  <MenuItem value='day'>Day </MenuItem>
                  <MenuItem value='week'>Week</MenuItem>
                </Select>
                <TextField
                  className='w-72 ml-4 bg-slate-50'
                  id='outlined-required'
                  size='small'
                  placeholder='minutes'
                  type='number'
                  disabled={goal === "calories"}
                  value={num}
                  onChange={inputNum}
                />
              </div>
            </RadioGroup>
          </div>
        </Box>

         {/*Alert will place here, types of Alert will based on conditions*/}
         <div className="flex content-center justify-center">
         {alert.show && (
            <CreateAlert {...alert} setAlert={setAlert}/>
          )}
        </div>

        {/*BUTTON*/}
        <Box className='flex  mx-5'>
          <div className=' w-full flex flex-wrap mt-2 justify-around'>
            <button
              className='w-60 mt-3 shadow bg-emerald-500 hover:bg-emerald-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 rounded'
              type='button'
              onClick={saveProfile}
            >
            submit
            </button>

            {/* <button
              className='w-60 mt-3 shadow bg-red-600 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded '
              type='button'
            >
              <Link to='/dashboard'>Cancel</Link>
            </button> */}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ProfileEdit;
