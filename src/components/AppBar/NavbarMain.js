import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RightDrawer from "./RightDrawer";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="headingAppBar"component="div" sx={{ flexGrow: 1 }}>
            SQL EDITOR
          </Typography>
          <RightDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;