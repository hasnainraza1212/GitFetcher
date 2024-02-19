import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Avatar, Modal as MuiModal, Stack } from "@mui/material";
import closeImage from "./../../assets/close.png"
import SkeletonModal from "../SkeletonModal/SkeletonModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  border:"0px",
  borderRadius:"20px",
  outline:"none",
  p: 4,
};

const Modal = ({ handleClose = () => {}, open = false, data ,isLoading}) => {
  
  return (
    <>
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >{
        !isLoading
        ?
        <Box sx={style}>
            <Box sx={{
                width:"20px",
                height:"20px",
                ml:"auto",
                position:"absolute",
                right:"20px",
                top:"20px",
                cursor:"pointer"

            }}
            onClick={handleClose}
            >
                <img style={{
                    width:"100%",
                    height:"100%"
                }} src= {closeImage}/>
            </Box>
         <Box sx={{
            display:"flex",
            gap:"20px",
            alignItems:"center"
         }}>
            <Avatar sx={{
                width:"100px",
                height:"100px",
                mb:1
            }} alt={data.name} src={data.avatar_url} />
            <Box>
            <Typography sx={{
            mb:1
          }} id="modal-modal-title" variant="h6" component="h2">
              {data.name}
            </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
            }}
          >
            
            <Typography>Following {data.followers}</Typography>
            <Typography>Follewers {data.followers}</Typography>
          </Box>
          <Typography id="modal-modal-description" >
            {data.location?? "Location is not avalaible."}
          </Typography>
            </Box>
         </Box>
         
        </Box>

        :
        <Box sx={style}>
          <SkeletonModal></SkeletonModal>
        </Box>
      }
      </MuiModal>
    </>
  );
};
export default Modal;
