import React, { useEffect, useState } from 'react';
import { useAuthContext } from 'Context/Auth';
import { Button, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { login } from 'Service/AuthServices';
import InputContainer from 'Components/InputContainer';

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const context = useAuthContext();
  let navigate = useNavigate();

  useEffect(() => {
    setError(false);
  }, [email,pass]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    // validate email regex
    const alphabetNumberUnderscoreRegex = /^(?=.{1,255}$)_*[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*_*$/;

    if (alphabetNumberUnderscoreRegex.test(event.target.value)) {
      setEmailError(true);
    }else setEmailError(false);
  }

  const handlePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShow(!show);
  }

  const handleSubmit = async () => {
    if (emailError) return;

    let res = await login(email, pass);

    if (res.status===200) {
      context.setAuthState({
        isLoggedIn: true,
        jwt: res.data.jwt
      });

      navigate("/dorayaki", { replace: true });
    } else setError(true);
  }

  return (
    <InputContainer title="Login">
      <Grid item md={10} sx={{ mt: '30px' }}>
        <TextField
          required
          error={emailError || error} 
          label="Email"
          fullWidth
          color="secondary"
          value={email}
          onChange={handleEmailChange}
          sx={{ input: {color: "black", typography: "body1"} }}
          helperText={emailError ? "Email tidak valid" : ""}
        />
      </Grid>
      <Grid item md={10} sx={{ mt: '50px' }}>
        <TextField
          required
          error={error}
          label="Password"
          type={show ? "text" : "password"}
          fullWidth
          color="secondary"
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
          sx={{ input: {color: "black"} }}
        />
      </Grid>
      {error && <Grid container item md={10} sx={{ justifyContent: 'end' }}>
        <Typography variant="body1" color="error">Admin not found!</Typography>
      </Grid>}
      <Grid container item md={10} sx={{ mt: '30px', mb: '10px', justifyContent: 'space-between' }}>
        <Button variant="text" color="secondary" size="small" sx={{ textTransform: 'none' }} onClick={() => navigate("/register", {replace: true})} >
          Register new account
        </Button>
        <Button variant="contained" color="success" size="large" sx={{ color: '#FFFFFF', textTransform: 'none' }} onClick={() => handleSubmit()} >
          Gas
        </Button>
      </Grid>
    </InputContainer>
  )
}

export default Login;
