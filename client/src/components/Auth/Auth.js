import React from 'react'
import { Avatar, Button, Paper,Grid,Typography, Container } from '@mui/material';
import LockOutlinedIcon from "@material-ui/core"

const Auth = () => {
    
  return (
    <Container>
        <Paper>
            <Avatar>
                <LockOutlinedIcon/>
            </Avatar>
        </Paper>
    </Container>
  )
}

export default Auth