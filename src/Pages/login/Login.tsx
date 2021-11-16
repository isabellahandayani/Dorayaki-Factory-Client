import React, { useState } from 'react';
import { useAuthContext } from 'Context/Auth';
import { Button, Container, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/system';
import axios from 'axios';

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState<String>("");
  const [pass, setPass] = useState<String>("");
  const context = useAuthContext();

  const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#FFFFFF',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FFFFFF',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FFFFFF'
      },
      '&:hover fieldset': {
        borderColor: '#FFFFFF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FFFFFF',
      },
    },
  });

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShow(!show);
  }

  const handleSubmit = async () => {
    let res = await axios.post(
      "http://localhost:5000/login/",
      {
        email: email,
        password: pass
      }
    )

    if (res.status===200) {
      context.setAuthState({
        isLoggedIn: true,
        jwt: res.data.jwt
      });
    }
  }

  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#FFFFFF' }}>
      <Grid container sx={{ width: '50%' }}>
        <Grid item md={12} bgcolor='warning.main' sx={{ borderRadius: '20px 20px 0 0', padding: '5px' }} >
          <Typography variant="h3" >Login Pabrik</Typography>
        </Grid>
        <Grid container item md={12} bgcolor='secondary.main' sx={{ borderRadius: '0 0 20px 20px', justifyContent: 'center', fontSize: '20px' }} >
          <Grid item md={8} sx={{ mt: '50px' }}>
            <TextField 
              label="Email"
              fullWidth
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item md={8} sx={{ mt: '50px' }}>
            <TextField 
              label="Password"
              type={show ? "text" : "password"}
              fullWidth
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
            />
          </Grid>
          <Grid item md={8} sx={{ mt: '30px', mb: '10px' }}>
            <Button variant="contained" color="warning" size="large" sx={{ color: '#FFFFFF', textTransform: 'none' }} onClick={() => handleSubmit()} >
              Gas
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login;
