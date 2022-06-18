import React from 'react'
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DrwerInnerItem from './DrwerInnerItem';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountTreeIcon from '@mui/icons-material/AccountTree';



const DrwaerSection = ({text,index,arrTable}) => {
    const [open, setOpen] = React.useState(false);
    const HeadText = () => {
        const r = text.toUpperCase()+"      ";
        return r
    }
    const handleClick = () => {
      setOpen(!open);
    };
  return (
    <>
        <ListItemButton onClick={handleClick}>
         <ListItemIcon sx={{ display: "flex",justifyContent: "start"}}><AccountTreeIcon style={{ color: "#0c3863"}}/></ListItemIcon>
         <ListItemText primary={HeadText()} style={{ color: "#0c3863"}} />
         <ListItemIcon sx={{ display: "flex",justifyContent: "end"}}>{open ? <ExpandLess style={{ color: "#0c3863"}}/> : <ExpandMore style={{ color: "#0c3863"}}/>}</ListItemIcon>
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <DrwerInnerItem text={text} arrTable={arrTable} />
        </Collapse>
    </>
  )
}

export default DrwaerSection