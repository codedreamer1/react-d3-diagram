import React from "react";
import { Link } from "react-router-dom"
import { AppBar, Typography, Toolbar, IconButton, Button, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(){
  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="app-bar" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KLOUDLOG
          </Typography>
          <Button color="inherit" component ={Link} to = {"/"}>Home</Button>
          <Button color="inherit" component ={Link} to = {"/widget"}>Widget</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}