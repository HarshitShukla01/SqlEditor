import React from 'react'
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import DrwerInnerItem from './DrwerInnerItem';
import DrwaerSection from './DrwaerSection';

const DrawerItem = ({arr,arrTable}) => {
      // const [drawerIcon,setDrawerIcon] = React.useState(false);

  return (
    <>
      <h1 className="h1_head_table" style={{textAlign:"center"}}> TABLES </h1> 
      <Divider style={{backgroundColor:"black"}}/>
      <List>
        {
          arr.map((text, index) => (
             <DrwaerSection text={text} index={index} arrTable={arrTable}/>
          ))
        }
      </List>
    </>
  )
}

export default DrawerItem