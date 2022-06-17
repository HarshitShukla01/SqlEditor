import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function DropMenu({setTheme}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [colorId, setColorId] = React.useState("github");
  const setColorSelected = (e) =>{
    setColorId(e);
    setTheme(e);
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        variant="outlined"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{marginLeft:"10px",marginTop:"3px",paddingRight:"4px"}}
      >
        Theme <ArrowDropDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem style={{backgroundColor: (colorId == "github" ? "lightblue" : "white")}} onClick={() =>{handleClose(); setColorSelected("github");}}>Github</MenuItem>
        <MenuItem style={{backgroundColor: (colorId == "eclipse" ? "lightblue" : "white")}} onClick={() =>{handleClose(); setColorSelected("eclipse");}}>Eclipse</MenuItem>
        <MenuItem style={{backgroundColor: (colorId == "dracula" ? "lightblue" : "white")}} onClick={() =>{handleClose(); setColorSelected("dracula");}}>Dracula</MenuItem>
        <MenuItem style={{backgroundColor: (colorId == "cobalt" ? "lightblue" : "white")}} onClick={() =>{handleClose(); setColorSelected("cobalt");}}>Cobalt</MenuItem>
        <MenuItem style={{backgroundColor: (colorId == "monokai" ? "lightblue" : "white")}} onClick={() =>{handleClose(); setColorSelected("monokai");}}>Monokai</MenuItem>
        <MenuItem style={{backgroundColor: (colorId == "one_dark" ? "lightblue" : "white")}} onClick={() =>{handleClose(); setColorSelected("one_dark");}}>One Dark</MenuItem>

      </Menu>
      </>
  );
}
