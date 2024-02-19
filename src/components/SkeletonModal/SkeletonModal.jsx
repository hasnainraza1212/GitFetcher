import * as React from 'react';
import Box from '@mui/material/Box';
import {Skeleton as MuiSkeleton} from '@mui/material';
const SkeletonModal = () => {
  return (
    <Box
  >
    {" "}
    <Box sx={{ width: 400 }}>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <MuiSkeleton sx={{
            width:"130px",
            height:"100px"
        }} variant="circular" />
        <Box
          sx={{
            width: "100%",
            display:"flex",
            flexDirection:"column",
            gap:"8px",
            marginTop:"10px"

          }}
        >
          <MuiSkeleton animation="wave" />
          <Box sx={{
            display:"flex",
            justifyContent:"space-between"
          }}>

          <MuiSkeleton sx={{
            width:"45%"
          }} animation="wave" />
          <MuiSkeleton sx={{
            width:"45%"
          }} animation="wave" />
          </Box>

          <MuiSkeleton animation={"wave"} />
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default SkeletonModal