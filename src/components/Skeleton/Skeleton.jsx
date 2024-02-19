
import * as React from 'react';
import Box from '@mui/material/Box';
import {Skeleton as MuiSkeleton} from '@mui/material';
import { ListItem } from '@mui/material';
const Skeleton = () => {
  return (
   
  <ListItem
    alignItems="flex-start"
    sx={{
      background: "white",
      borderRadius: "20px",
      mb: 2,
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    }}
  >
    {" "}
    <Box sx={{ width: 400 }}>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "end",
        }}
      >
        <MuiSkeleton width={80} height={60} variant="circular" />
        <Box
          sx={{
            width: "100%",
          }}
        >
          <MuiSkeleton animation="wave" />
          <MuiSkeleton animation={"wave"} />
        </Box>
      </Box>
    </Box>
  </ListItem>
  )
}

export default Skeleton