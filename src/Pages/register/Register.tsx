import React, { useState, useEffect } from 'react';
import { useAuthContext } from 'Context/Auth';
import { Button, Box, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { register } from 'Service/AuthServices';

function Register() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const context = useAuthContext();
  let navigate = useNavigate();

  useEffect(() => {
    setError(false);
  }, [email,pass,username]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    // validate email regex
    const alphabetNumberUnderscoreRegex = /^(?=.{1,255}$)_*[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*_*$/;

    if (alphabetNumberUnderscoreRegex.test(event.target.value)) {
      setEmailError(true);
    }else setEmailError(false);
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const handlePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShow(!show);
  }

  const handleSubmit = async () => {
    let res = await register(email, pass, username);

    if (res.status===200) {
      context.setAuthState({
        isLoggedIn: true,
        jwt: res.data.jwt
      });

      navigate("/dorayaki", { replace: true });
    }else setError(true);
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#FFFFFF' }}>
      <Grid container sx={{ width: '50%' }}>
        <Grid item md={12} bgcolor='warning.main' sx={{ borderRadius: '20px 20px 0 0', padding: '5px' }} >
          <Typography variant="h3" >Register Pabrik</Typography>
        </Grid>
        <Grid container item md={12} bgcolor='secondary.main' sx={{ borderRadius: '0 0 20px 20px', justifyContent: 'center', fontSize: '20px' }} >
          <Grid item md={8} sx={{ mt: '30px' }}>
            <TextField 
              label="Email"
              fullWidth
              error={emailError || error}
              color="primary"
              value={email}
              onChange={handleEmailChange}
              sx={{ input: {color: "#FFFFFF"} }}
              helperText={emailError ? "Email tidak valid" : ""}
            />
          </Grid>
          <Grid item md={8} sx={{ mt: '50px' }}>
            <TextField 
              label="Username"
              fullWidth
              error={error}
              color="primary"
              value={username}
              onChange={handleUsernameChange}
              sx={{ input: {color: "#FFFFFF"} }}
            />
          </Grid>
          <Grid item md={8} sx={{ mt: '50px' }}>
            <TextField 
              label="Password"
              type={show ? "text" : "password"}
              fullWidth
              error={error}
              color="primary"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              InputProps={{
                endAdornment : (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={(event) => handlePassword(event)}
                    >
                        {show ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ input: {color: "#FFFFFF"} }}
            />
          </Grid>
          <Grid container item md={8} sx={{ mt: '30px', mb: '10px', justifyContent: 'space-between' }}>
            <Button variant="text" color="primary" size="small" sx={{ color: '#FFFFFF', textTransform: 'none' }} onClick={() => navigate("/login", {replace: true})} >
              Login existing account
            </Button>
            <Button variant="contained" color="success" size="large" sx={{ color: '#FFFFFF', textTransform: 'none' }} onClick={() => handleSubmit()} >
              Gas
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Register;
