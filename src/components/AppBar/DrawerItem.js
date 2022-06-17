import React from 'react'
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DrwerInnerItem from './DrwerInnerItem';

const DrawerItem = ({arr,arrTable}) => {
      const [drawerIcon,setDrawerIcon] = React.useState(false);

  return (
    <>
    <List>
        {
          arr.map((text, index) => (
              <ListItem key={text} >
                <ListItemButton>
                  <ListItemIcon>
                    {drawerIcon ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                  </ListItemIcon>
                 
                    <ListItemText primary={text} />
                    <DrwerInnerItem text={text} arrTable={arrTable} />
                 
                </ListItemButton>
              </ListItem>
          ))
        }
          </List>
    </>
  )
}

export default DrawerItem