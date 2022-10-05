import React, { useState } from "react";
import { TextField, Paper, Typography} from "@mui/material";


const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = () => {};

  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">Create a Post</Typography>
        <TextField
          name="creator"
          variant="outline"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outline"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({...postData, creator: e.target.value })
          }
        />
        <TextField
          name="message"
          variant="outline"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({...postData, creator: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outline"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({...postData, creator: e.target.value })
          }
        />
      </form>
    </Paper>
  );
};

export default Form;
