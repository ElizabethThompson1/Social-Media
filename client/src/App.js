import React, { useEffect } from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@mui/material"
import {useDispatch} from "react-redux";
import image from "./images/donuts.jpg";
import Post from "./components/Posts/Posts";
import Form from "./components/Forms/Form"
import { getPosts } from "./actions/posts";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <Container maxidth ="lg">
            <AppBar  position="static" color="inherit">
                <Typography variant="fill" align="center">Posts</Typography>
                <img  src={image} alt="post" />
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