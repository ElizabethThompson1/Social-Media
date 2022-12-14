import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from "moment";
import { useDispatch } from "react-redux";
import "./style.css"
import { deletePost,likePost } from "../../../actions/posts";




const Post = ({post, setCurrentId}) => {
    const dispatch = useDispatch();


    return(
        <Card className="card">
            <CardMedia className="media" image={post.selectedFile} />
                    <div className="overlay">
                        <Typography variant="h6" >{post.user}</Typography>
                        <Typography variant="body2"   >{moment(post.createdAt).fromNow()}</Typography>
                    </div>
                    <div className="overlay2">
                        <Button style={{color:"white"}} onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="large" /> </Button>
                    </div>
                <div className="details">
                    <Typography variant="body2" >{post.tags.map((tag)=> `#${tag} `)}</Typography>
                </div>
                <div>
                    <CardContent>
                        <Typography variant="body2" gutterBottom>{post.message}</Typography>
                    </CardContent>
                    <CardActions className="cardAction">
                        <Button onClick={()=> dispatch(likePost(post._id))} >
                            <ThumbUpIcon fontSize="small"/>
                           {"  "} Like {" "} {post.likeCount}
                        </Button>
                        <Button  onClick={() => dispatch(deletePost(post._id))}>
                            <DeleteIcon fontSize="small"/>
                        </Button>
                    </CardActions>
                </div>
        </Card>
    );
} 

export default Post