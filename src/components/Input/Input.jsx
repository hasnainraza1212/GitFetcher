import { Box, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import searchImage from "./../../assets/search.webp"
import { useDispatch, useSelector } from 'react-redux'
import { setAPIError, setIsloading, updateUsersData } from '../../redux/userSlice.js/userSlice'
import { getUsers } from '../../EndPoints/EndPoints'
import debounce from "lodash.debounce"
const Input = () => {
  
  const dispatch = useDispatch()
  const isLoading = useSelector(state=>state.usersData.isLoading)
  const apiError = useSelector(state=>state.usersData.apiError)
  const [text, setText] = useState("")
  const handleUserSearch = debounce(async(inputText)=>{
    dispatch(setAPIError(false))
      if (!inputText){
        (async () => {
          dispatch(setIsloading(true));
          let res = await getUsers(`users`)
          if (res) {
            res = await res?.json();
            if (res.length > 0) {
               dispatch(updateUsersData(res));
               dispatch(setIsloading(false));
            }
          }
        })();
        return
      }
      dispatch(setIsloading(true))
      let res = await getUsers(`search/users?q=${inputText}`)
      if (res.ok) {
        res = await res?.json();
        dispatch(updateUsersData(res.items))
        dispatch(setIsloading(false))
      }
      else{
        dispatch(setAPIError(true))
      }
      console.log(apiError)
  })
  let debounceTimer;
  const handleInputChange = (e)=>{
    e.preventDefault()
    const inputText = e.currentTarget.value;
    setText(e.currentTarget.value)
    clearTimeout(debounceTimer)
     debounceTimer = setTimeout(()=>{
      handleUserSearch(inputText)
    },1000)
  }
  return (
    <Box
    component="form"
    sx={{
      width:"100%"
    }}
  >
    <Box sx={{
      position:"relative",
    }}>
   <TextField 
  onKeyDown={(e) => {
    if(e.key==="Enter"){
       e.preventDefault()
       return  handleUserSearch(text)
    }
  }} 
  value={text} 
  onChange={(e)=>{handleInputChange(e)}} 
  fullWidth 
  id="outlined-basic" 
  label="search" 
  variant="outlined" 
/>

    <Box sx={{
      width:"50px",
      height:"100%",
      position:"absolute",
      top:"0px",
      right:"0px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>
      <img onClick={(e)=>handleUserSearch(text)} style={{
        height:"25px",
        width:"25px",
        cursor:"pointer"
      }}  src={searchImage}/>

    </Box>
    </Box>
  </Box>
  )
}

export default Input