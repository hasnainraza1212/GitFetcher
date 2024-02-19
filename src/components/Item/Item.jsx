import { Avatar, Box, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setIsloading } from '../../redux/userSlice.js/userSlice';
import { getUsers as getUser} from '../../EndPoints/EndPoints';
const Item = ({data}) => {
  const dispatch = useDispatch()
  const [isLoading, setIsloading] = React.useState(true)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [user, setUser] = useState({})
  const fetchUser = ()=>{
    (async () => {
      setIsloading(true)
      let res = await getUser(`users/${data.login}`)
    if (res) {
      res = await res?.json();
      setUser(res)
      setIsloading(false)
    }

  })();
  }

  return (
    <>
    <ListItem alignItems="flex-start"
    sx={{
      background:"white",
      borderRadius:"20px",
      mb:2,
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
    }}
    >
        <ListItemAvatar sx={{
          m:0
        }}>
          <Avatar sx={{
            width:"70px",
            height:"70px"
          }} alt={data.login} src={data.avatar_url} />
        </ListItemAvatar>
    <Box sx={{
      display:"flex",
      flexDirection:"column",
      height:"70px",
       justifyContent:"end",
       ml:"10px"
    }}>

        <Typography
         onClick={()=>{
           fetchUser()
          handleOpen()
         }}
         variant="h6" component="h2"
         sx={{
          cursor:"pointer"
         }}
         >
            {"@"+data.login}
        </Typography>
        <Typography  sx={{
          ml:1,
          color:"#989898",
          cursor:"pointer"
        }}
        onClick={()=>{
          window.open(data.html_url, '_blank')
        }}
        >

            Visit {data.login } Github account
        </Typography>
    </Box>
        
      </ListItem>
      <Modal open={open} handleClose={handleClose} data = {user} isLoading={isLoading}/>
    </>
  )
}

export default Item