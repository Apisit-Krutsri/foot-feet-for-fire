import React from "react";
import "./signUp.css";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography, TextField, Button} from "@mui/material";


//function section
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");
  

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

    if (password.length >= 8 && password === confirm) {
      setErrorConfirm("");
    } else {
      setErrorConfirm("Confirm password is not matched");
    }
  };

  const theme = createTheme({
    spacing: 1,
  });

  //////////////////////////// JSX-section ///////////////////////////////////

  return (
    <ThemeProvider theme={theme}>
      <Box className="container">
        <Typography id="text" variant="h5" align="center">
          SIGN UP
        </Typography>
        <hr></hr>
        <Box className="fill">
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
          <TextField
            id="confirm"
            type="password"
            label="Confirm Password"
            variant="outlined"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            helperText={errorConfirm}
            margin="dense"
            required
          />
          <Button
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
    </ThemeProvider>
  );
}

export default SignUp;
