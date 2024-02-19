import * as React from 'react';
import Box from '@mui/material/Box';
import ghostImage from "./../../assets/ghost.png"
const NotFound = () => {
 

  return (
    <Box
    sx={{
      background: "#D5E9F6",
      width:"100vw",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}
  >
    <img style={{
      width:"300px"
    }}
    src={ghostImage}
    />

  </Box>
  );

};

export default NotFound;
