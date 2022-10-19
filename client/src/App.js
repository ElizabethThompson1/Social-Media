import React, { useState, useEffect } from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@mui/material"
import {useDispatch} from "react-redux";
import Post from "./components/Posts/Posts";
import Form from "./components/Forms/Form"
import { getPosts } from "./actions/posts";


const App = () => {
    const[currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <Container maxidth ="lg">
            <AppBar  position="static" color="inherit">
                <Typography className="title" variant="fill" align="center">Posts</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid item xs ={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid   >
                        <Post setCurrentId={setCurrentId} className="post"/>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App