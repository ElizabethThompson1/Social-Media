import PostMessage from "../models/postMessage";

export const getPosts = (req, res) => {
    res.send("This is Working")
}

export const createPost = (req,res) =>{
    res.send("Post Creation");
}