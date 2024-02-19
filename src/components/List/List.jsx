import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { Box, List as MuiList } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUsersData,
  setIsloading,
} from "../../redux/userSlice.js/userSlice";
import Skeleton from "../Skeleton/Skeleton";
import { getUsers } from "../../EndPoints/EndPoints";
let myArray = [1, 2, 3, 4, 5,6, 7,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const List = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.usersData.value);
  const isLoading = useSelector((state) => state.usersData.isLoading);
  useEffect(() => {
    (async () => {
      dispatch(setIsloading(true));
      let res = await getUsers("users")
      if (res) {
        res = await res?.json();
        if (res.length > 0) {
          dispatch(updateUsersData(res));
          dispatch(setIsloading(false));
        }
      }
    })();
  }, [dispatch]);

  return (
    <MuiList sx={{ width: "100%", bgcolor: "background.paper" }}>
      {!isLoading ? (
        data?.map((x) => (
          <Box key={x.node_id}>
            <Item data={x} />
          </Box>
        ))
      ) : (
        <>
          {myArray.map((x, i) => (
            <Box key={i}>
              
              <Skeleton/>

            </Box>
          ))}

        </>
      )}
    </MuiList>
  );
};

export default List;
