import React from "react";
import style from "./signUp.module.css"
import { useState } from "react";
import { Box, Typography, TextField, Button} from "@mui/material";


//function section
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");
  const [errorColor, setErrorColor] = useState(false);
  

  const validateForm = (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      setErrorEmail("");
    } else {
      setErrorEmail("Incorrect email");
      setErrorColor(true);
    }

    if (password.length >= 8) {
      setErrorPassword("");
    } else {
      setErrorPassword("Password must be at least 8 characters");
      setErrorColor(true);
    }

    if (password.length >= 8 && password === confirm) {
      setErrorConfirm("");
    } else {
      setErrorConfirm("Confirm password is not matched");
      setErrorColor(true);
    }
  };


  //////////////////////////// JSX-section ///////////////////////////////////

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
    <Box className={style.container}>
        <Typography className="text-lime-500 text-center font-semibold 2xl:text-left pb-5" variant="h5">
          SIGN UP
        </Typography>
        <hr className="border-1 border-lime-600"></hr>
        <Box className="grid p-5">
          <TextField
            id="email"
            type="text"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={errorEmail}
            error={errorColor}
            margin="dense"
            required
          />

          <TextField
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText={errorPassword}
            error={errorColor}
            margin="dense"
            required
          />
          <TextField
            id="confirm"
            type="password"
            label="Confirm Password"
            variant="outlined"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            helperText={errorConfirm}
            error={errorColor}
            margin="dense"
            required
          />
          <Button
          className="mt-5 mb-5 bg-lime-600"
            id="button"
            type="submit"
            variant="contained"
            color="success"
            onClick={validateForm}
            sx={{mt:20}}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default SignUp;
