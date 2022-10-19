import React, { useState, useEffect } from "react";
import {Container, AppBar, Typography, Grow, Grid,Box} from "@mui/material"
import {useDispatch} from "react-redux";
import Post from "./components/Posts/Posts";
import Form from "./components/Forms/Form"
import { getPosts } from "./actions/posts";


const App = () => {
    const[currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return(
        <Container maxidth ="lg">
            <AppBar  position="static" color="inherit">
                <Typography className="title" variant="fill" align="center">Posts</Typography>
            </AppBar>
            <Grow in>
                <Container >
                    <Box container  justify="space-between" alignItems="center" justifyContent="center" >
                        <Grid >
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                        <Box >
                            <Post alignItems="center" setCurrentId={setCurrentId} className="post"/>
                        </Box>
                        
                    </Box>
                    
                    
                </Container>
            </Grow>
        </Container>
    )
}

export default App