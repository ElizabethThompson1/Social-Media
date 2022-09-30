import React from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@mui/material"
import image from "./images/donuts.jpg";
import Post from "./components/Posts/Posts";
import Form from "./components/Forms/Form";



const App = () => {
    return(
        <Container maxidth ="lg">
            <AppBar position="static" color="inherit">
                <Typography varint="h2" align="center">Posts</Typography>
                <img src={image} alt="post" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Post/>
                    </Grid>
                    <Grid item xs ={12} sm={4}>
                        <Form/>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App