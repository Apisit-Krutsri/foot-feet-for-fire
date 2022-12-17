import React from "react";
import style from "./signIn.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorColor, setErrorColor] = useState(false);

  const [error, setError] = useState("");

// vallidate signin form
  const validateForm = async () => {
    let emailValid = true;
    let passwordValid = true;

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

    return { emailValid, passwordValid };
  };

  const signInData = {
    email: email,
    password: password,
  };

// if pass the validation conditions, the email and password will be validated at Backend, if no error, token will be saved in localStorage.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValidity = await validateForm();
    if (
      formValidity.emailValid &&
      formValidity.passwordValid
    ) {
      try {
        const {data:res} = await axios.post(
          `${process.env.REACT_APP_API}/login`,signInData
        );
        localStorage.setItem("token", res.data);
        window.location = "/dashboard";
        console.log(res.message);
        // navigate("/signin");
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    } else {
      console.log("noooooooooooooo");
    }
  };

  //////////////////////////// JSX ///////////////////////////////////

  return (
    <div className='flex items-center justify-center min-h-screen bg-slate-100'>
      <Card className={style.container}>
        <Typography
          className='text-lime-500 text-center font-semibold 2xl:text-left pb-5'
          variant='h5'
        >
          SIGN IN
        </Typography>
        <hr className='border-1 border-lime-600'></hr>
        <div className='grid p-5'>
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

          {error && (
            <div className='text-center bg-red-400 rounded-sm p-2 mt-3 font-bold text-neutral-600'>
              {error}
            </div>
          )}

          <Button
            className='mt-5 mb-5 bg-lime-600'
            type='submit'
            variant='contained'
            onClick={handleSubmit}
          >
            Sign In
          </Button>

          <Button variant='outlined'>Forgot Password</Button>
          <div className='flex justify-center mt-2'>
            <div className='text-sm'>Not have an account ?</div>
            <button className='mx-3 text-sm text-green-800'>
              <Link to='/signup'>Sign Up</Link>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SignIn;
