import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import {getTablesMockData} from "../TableCreate/TempData";

import DrawerItem from "./DrawerItem";
export default function RightDrawer() {
  const [state, setState] = React.useState(false);
  const toggleDrawer = (op) => (event) => {
    printData();
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(op);
  };
  const arrTable = getTablesMockData();
  // const printData = () => {
  //   for(let x in arrTable){
  //     console.log(x)
  //     for(let y in arrTable[x]["columns"]){
  //       console.log(arrTable[x]["columns"][y]);
  //     }
  //   }
  // }
  const [arr,setArr] = React.useState([]);
  const printData = () => {
     let tArr =[];
      for(let x in arrTable){
        tArr.push(x);
      }
      setArr(tArr);
  }

  
  
  return (
    <div style={{ color: "white",fontSize: "18px",display: "flex",alignItems: "center"}}>
    <span style={{fontSize:"20px"}}> TABLES </span>
      <IconButton
        size="large"
        edge="false"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
       <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(true)}
          onKeyDown={toggleDrawer(false)}
        >
          <DrawerItem arr={arr} arrTable={arrTable}/>
        </Box>
      </Drawer>
    </div>
  );
}
