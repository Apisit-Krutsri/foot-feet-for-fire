import React from "react";
import "./signIn.css";
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

  const validateForm = (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      setErrorEmail("");
    } else {
      setErrorEmail("Incorrect email");
    }

    if (password.length >= 8) {
      setErrorPassword("");
    } else {
      setErrorPassword("Password must be at least 8 characters");
    }
  };

  //////////////////////////// JSX ///////////////////////////////////

  return (
    <Card className="container">
      <Typography id="text" variant="h5" align="center">
        SIGN IN
      </Typography>
      <hr></hr>
      <div className="fill">
        <TextField
          id="email"
          type="text"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText={errorEmail}
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
          margin="dense"
          required
        />

        <Button
          id="button"
          type="submit"
          variant="contained"
          color="success"
          onClick={validateForm}
        >
          Sign In
        </Button>

        <Button variant="outlined">Forgot Password</Button>
      </div>
    </Card>
  );
}

export default SignIn;
