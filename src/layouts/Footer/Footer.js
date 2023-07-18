import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Footer(){
    return(
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="body1" color="inherit">
                © 2022 KLOUGLOG
                </Typography>
            </Toolbar>
       </AppBar>
    )
}