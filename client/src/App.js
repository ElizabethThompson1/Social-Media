import React from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@mui/material"
import post from "./images/donuts.jpg";

const App = () => {
    return(
        <Container maxidth ="lg">
            <AppBar position="static" color="inherit">
                <Typography varint="h2" align="center">Posts</Typography>
                <img src={post} alt="post" />
            </AppBar>
        </Container>
    )
}
export default App