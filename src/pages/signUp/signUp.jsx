import React from "react";
import style from "./signUp.module.css";
import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");
  const [errorColor, setErrorColor] = useState(false);

  const navigate = useNavigate();

// validate signup form
  const validateForm = async () => {
    let emailValid = true;
    let passwordValid = true;
    let confirmValid = true;
  
    if (email.includes("@")) {
      setErrorEmail("");
    } else { 
      setErrorEmail("Incorrect email");
      setErrorColor(true);
      emailValid = false;
    }
  
    if (password.length >= 8) {
      setErrorPassword("");
    } else {
      setErrorPassword("Password must be at least 8 characters");
      setErrorColor(true);
      passwordValid = false;
    }
  
    if (password.length >= 8 && password === confirm) {
      setErrorConfirm("");
    } else {
      setErrorConfirm("Confirm password is not matched");
      setErrorColor(true);
      confirmValid = false;
    }
  
    return { emailValid, passwordValid, confirmValid };
  };
  
  //data from the user
  const signUpData = {
    email: email,
    password: password,
  };
  
  const [error, setError] = useState("");
  

  // if pass the validation conditions, the email and password will be posted to the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValidity = await validateForm();
    if (formValidity.emailValid && formValidity.passwordValid && formValidity.confirmValid) {
      try {
        const res = await axios.post(`${process.env.REACT_APP_API}/user`, signUpData);
        console.log(res.message);
        // navigate("/signin");
        const {data:response} = await axios.post(
          `${process.env.REACT_APP_API}/login`,signUpData
        );
        localStorage.setItem("token", response.data);
        if (response.data) {
          navigate("/profile");
        }
        
      } catch (error) {
        if (error.response && error.response.status >= 400 && error.response.status <= 500) {
          setError(error.response.data.message);
        }
      }
    } else {
      console.log("noooooooooooooo");
    }
  };

  //////////////////////////// JSX-section ///////////////////////////////////

  return (
    <div className={style.signup}>
    <div className='flex items-center justify-center min-h-screen'>
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
          {error && (
            <div className='text-center bg-red-400 rounded-sm p-2 mt-3 font-bold text-neutral-600'>
              {error}
            </div>
          )}
          <Button
            className='mt-5 mb-5 bg-lime-600'
            id='button'
            type='submit'
            variant='contained'
            color='success'
            sx={{ mt: 20 }}
            onClick={handleSubmit}
          >
            {" "}
            Sign Up
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
    </div>
  );
}

export default SignUp;
