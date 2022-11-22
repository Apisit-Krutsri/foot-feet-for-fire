import React from "react";
import style from "./signIn.module.css";
import { useState } from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
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
  };

  //////////////////////////// JSX ///////////////////////////////////

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <Card className={style.container}>
        <Typography
          className="text-lime-500 text-center font-semibold 2xl:text-left pb-5"
          variant="h5"
        >
          SIGN IN
        </Typography>
        <hr className="border-1 border-lime-600"></hr>
        <div className="grid p-5">
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

          <Button
            className="mt-5 mb-5 bg-lime-600"
            type="submit"
            variant="contained"
            onClick={validateForm}
          >
            Sign In
          </Button>

          <Button variant="outlined">Forgot Password</Button>
        </div>
      </Card>
    </div>
  );
}

export default SignIn;
