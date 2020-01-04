import "./Header.scss";
import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



function template() {
  return (
    <AppBar position="static">
    <Toolbar variant="dense">
      <Typography variant="h6" color="inherit">
        Elite Shoppy
      </Typography>
    </Toolbar>
  </AppBar>
  );
};

export default template;
