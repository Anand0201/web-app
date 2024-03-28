import React from 'react'
import { Box, Dialog, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const dialogStyle = {
  backdropFilter: 'blur(5px)',
  marginTop: '1%',
  height: '95%',
  width: '60%',
  maxWidth: '40%',
  maxHeight: '30%',
  borderRadius: 5,
  boxShadow: 'none',
  backgroundSize: 'cover',
  positon: 'fixed',
  overflow: 'hidden',
};

const Title = styled(Typography)`
  font-size: 26px;
  color: #3A3F41;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 100%;
`

const Login = () => {

  const onloginsuccess = (res) => {
    const decoded = jwtDecode(res.credential);
    console.log(decoded);
    
  };
  const onloginerror = (Error) => {
    console.log("Error", Error);
  };
  return (

    <Dialog open={true}
      maxWidth={'md'}
      PaperProps={{ sx: dialogStyle }}
    >
      <Title>Welcome to New World</Title>
      <Box styled={{ positon:'absolute'}}>
        <GoogleLogin
          onSuccess={onloginsuccess}
          onError={onloginerror}
        />
      </Box>

    </Dialog>
  );
};

export default Login;
