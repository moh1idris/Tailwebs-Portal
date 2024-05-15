import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../AuthSlice"; // Import the login action from authSlice
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./LoginScreen.css";
// import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import './LoginScreen.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "tailwebs" && password === "tailwebs@1") {
      dispatch(login({ username }));
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        height: "90vh",
        padding: "35px 25px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          border: "1px solid transparent",
          background: "#eeeeee",
          borderRadius: "5px",
          flexDirection: "column",
        }}
      >
        <h1 className="mainHead">Tailwebs .</h1>
        <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '30vw ' ,
        border: '1px solid transparent',
        padding: '8% 8%',
        background: 'white',
        borderRadius: '5px',
        // Media query for screens below 480px width
        '@media (max-width: 480px)': {
          width: '60vw',
        },
      }}
          className="formdiv"
        >
          <h1 className="textHead">Username</h1>
          <TextField
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: 20, borderRadius: 0 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person2OutlinedIcon className="lockk" />
                </InputAdornment>
              ),
            }}
          />

          <h1 className="textHead">Password</h1>

          <TextField
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: 20, borderRadius: 0 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenOutlinedIcon className="lockk" />
                </InputAdornment>
              ),
            }}
          />

          {error && (
            <Typography
              variant="body2"
              color="error"
              style={{ marginBottom: 10 }}
            >
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            className="loginbtn"
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Login;
