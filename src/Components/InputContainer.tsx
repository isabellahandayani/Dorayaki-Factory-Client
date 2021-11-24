import { Box, Grid, Typography } from "@mui/material";
import React from "react";

interface props {
  title: string;
  children: React.ReactNode;
}

const InputContainer = ({ title, children }: props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#FFFFFF' }}>
      <Grid container sx={{ width: '50%', borderRadius: '20px', overflow: 'hidden', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
        <Grid item md={12} bgcolor='warning.main' sx={{ padding: '5px' }} >
          <Typography variant="h4" >{ title }</Typography>
        </Grid>
        <Grid container item md={12} sx={{ justifyContent: 'center', fontSize: '20px' }} >
          { children }
        </Grid>
      </Grid>
    </Box>
  )
}

export default InputContainer;
