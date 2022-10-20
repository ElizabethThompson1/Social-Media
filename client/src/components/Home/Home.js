import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import React from "react";
import { Grow,Container,Box,Grid } from "@mui/material";
import Form from "../Forms/Form";
import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";


const Home = () =>{
    const[currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return(
        <Grow in>
                <Container >
                    <Box container  justify="space-between" alignItems="center" justifyContent="center" >
                        <Grid >
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                        <Box >
                            <Posts alignItems="center" setCurrentId={setCurrentId} className="post"/>
                        </Box> 
                    </Box>
                </Container>
            </Grow>
    )
}
export default Home