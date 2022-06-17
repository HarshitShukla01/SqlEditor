import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { temporarydata , customerColumn,getTablesMockData} from "../TableCreate/TempData";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
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
    <div style={{ color: "white" }}>
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
