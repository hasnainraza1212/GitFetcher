import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import List from "../components/List/List";
import Input from "../components/Input/Input";
import logo from "./../assets/logo.png";
import SnackAlert from "../components/SnackAlert/SnackAlert";
import { setAPIError ,} from "../redux/userSlice.js/userSlice";
import { useDispatch , useSelector} from "react-redux";
const AllUsers = () => {
 const dispatch = useDispatch()
 const apiError = useSelector(state=>state.usersData.apiError)
  return (
    <Box
      sx={{
        padding: "20px",
        paddingTop: "0px",
      }}
    >
      <Box sx={{
        display: 'flex',
        gap: '20px',
        marginBottom: '40px',
        flexDirection: 'row', 
        alignItems: 'end', 
        '@media (max-width: 768px)': { // Change layout for screens up to 768px wide
          flexDirection: 'column',
          alignItems: 'start',
        },
      }}>
        <img
          style={{
            width: "150px",
            marginTop: "10px",
          }}
          src={logo}
        />
        <Input />
      </Box>
      <Box></Box>
      <List />
  <SnackAlert open={apiError} handleClose={()=>{  dispatch(setAPIError(false))}}/>
    </Box>
  );
};

export default AllUsers;
