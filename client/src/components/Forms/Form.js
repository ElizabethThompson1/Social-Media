import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import "./style.css";

const Form = ({currentId,setCurrentId}) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId): null);
  const [postData, setPostData] = useState({
    user: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  
  
  useEffect(()=>{
    if(post) setPostData(post);
  },[post]) 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId){
      dispatch(updatePost(currentId, postData));
    }else{
      dispatch(createPost(postData));
    }
    setCurrentId(null);
    setPostData({
      user: '',
      message: '',
      tags: '',
      selectedFile: '',})
  }

  

  return (
    <Paper className="container">
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography  variant="h6" className="Title" >{currentId ? "Editing" : "Creating"} a Post</Typography>
        <TextField className="text"
          name="user"
          variant="outlined"
          placeholder="User"
          fullWidth
          value={postData.user}
          onChange={(e) =>
            setPostData({ ...postData, user: e.target.value })
          }
        />
        <TextField className="text"
          name="message"
          variant="outlined"
          placeholder="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField className="text"
          name="tags"
          placeholder="#tags"
          variant="outlined"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })}
        />
        <div className="filebase">
          <FileBase64  type="file"  multiple={false} onDone= {({base64}) => setPostData({...postData, selectedFile:base64})} />
        </div>
          <Button variant="contained" align="center" type="submit"  >Submit</Button>
      </form>
    </Paper>
  );
};

export default Form;
