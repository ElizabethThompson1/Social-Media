import React from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import {Link} from "react-router-dom";



const Navbar = () => {
  const user = null;

  return (
        <AppBar  position="static" color="inherit">
            <div>
               <Typography component={Link} to="/" className="title" variant="fill" align="center">Home</Typography> 
            </div>
          <Toolbar>
            {user ? (
              <div>
                <Avatar alt={user.result.name} scr={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                <Typography>{user.result.name}</Typography>
                <Button>LogOut</Button>
              </div>
            ):(
              <Button component={Link} to="/auth">Login</Button>
            )}
          </Toolbar>
        </AppBar>
  );
};

export default Navbar; 