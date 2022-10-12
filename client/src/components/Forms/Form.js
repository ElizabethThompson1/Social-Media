import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import "./Form.css"

const Form = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    user: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(createPost(postData));
    
  }

  const clear = () => {}

  return (
    <Paper className="container">
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography  variant="h6" className="Title" >Create a Post</Typography>
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
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField className="text"
          name="tags"
          placeholder="outlined"
          variant="outlined"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className="filebase">
          <FileBase64  type="file" multiple={false} onDone= {({base64}) => setPostData({...postData, selectedFile:base64})} />
        </div>
        <Button variant="contained" type="submit" size="large"  >Submit</Button>
        <Button variant="contained" size="small"   onClick={clear} >Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
