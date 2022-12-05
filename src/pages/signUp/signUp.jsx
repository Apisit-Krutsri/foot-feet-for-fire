import React from "react";
import style from "./signUp.module.css";
import { useState } from "react";
import { Box, Typography, TextField, Button,} from "@mui/material";
import { Link } from "react-router-dom";

//function section
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");
  const [errorColor, setErrorColor] = useState(false);

  // const [emailValid,setEmailValid] = useState(true)
  // const [passwordValid,setPasswordValid] = useState(true)
  // const [confirmValid,setConfirmValid] = useState(true)

  // const [btn, setBtn] = useState('/signup')

  const validateForm = (e) => {
    e.preventDefault();

    if (email.includes("@")) {
      setErrorEmail("");
    
    } else {
      setErrorEmail("Incorrect email");
      setErrorColor(true);
      // setEmailValid(false)
    }

    if (password.length >= 8) {
      setErrorPassword("");
      
    } else {
      setErrorPassword("Password must be at least 8 characters");
      setErrorColor(true);
      // setPasswordValid(false)
    }

    if (password.length >= 8 && password === confirm) {
      setErrorConfirm("");
  
    } else {
      setErrorConfirm("Confirm password is not matched");
      setErrorColor(true);
      // setConfirmValid(false)
    }

    // if (true) {
    //   saveProfile ();
    // } else {
    //   console.log('nooooooooooooo')
    //   e.preventDefault();
    // }

  };

// when click "submit", the the data will be saved
const saveProfile = (event) => {
  // event.preventDefault();
  const signUpData = {
    email: email,
    password: password
  };
  console.log(signUpData);
};


  //////////////////////////// JSX-section ///////////////////////////////////

  return (
    <div className='flex items-center justify-center min-h-screen bg-slate-100'>
      <Box className={style.container}>
        <Typography
          className='text-lime-500 text-center font-semibold 2xl:text-left pb-5'
          variant='h5'
        >
          SIGN UP
        </Typography>
        <hr className='border-1 border-lime-600'></hr>
        <Box className='grid p-5'>
          <TextField
            id='email'
            type='text'
            label='Email'
            variant='outlined'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={errorEmail}
            error={errorColor}
            margin='dense'
            required
          />

          <TextField
            id='password'
            type='password'
            label='Password'
            variant='outlined'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText={errorPassword}
            error={errorColor}
            margin='dense'
            required
          />
          <TextField
            id='confirm'
            type='password'
            label='Confirm Password'
            variant='outlined'
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            helperText={errorConfirm}
            error={errorColor}
            margin='dense'
            required
          />
          <Button
            className='mt-5 mb-5 bg-lime-600'
            id='button'
            type='submit'
            variant='contained'
            color='success'
            onClick={validateForm}
            sx={{ mt: 20 }}
            // disabled = {disable}
          >
            <Link to='/edit'>Sign Up</Link>
          </Button>
          <div className='flex justify-center'>
            <div className='text-sm'>Already have an account ?</div>
            <button className='mx-3 text-sm text-green-800'>
              <Link to='/signin'>Sign In</Link>
            </button>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default SignUp;
