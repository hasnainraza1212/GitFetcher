import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
const SnackAlert = ({type="error",open=false , handleClose=()=>{} }) => {
  return (
      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          severity="success"
          autoHideDuration={5000}
          onClose={handleClose}
          message="I love snacks"
        >
          <Alert
            onClose={handleClose}
            severity={type}
            variant="filled"
            sx={{ width: "100%" }}
          >
            API rate limit exceeded!
          </Alert>
        </Snackbar>
      </Box>
  )
}

export default SnackAlert