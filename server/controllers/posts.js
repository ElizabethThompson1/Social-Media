import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";


export const getPosts = async (req, res) => {
    try{
        const postMessage = await PostMessage.find();

        res.status(200).json(postMessage);
    } catch (err){
        res.status(404).json({message: "unable to get all post"});
    }
};

export const createPost = async (req,res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try{
        await newPost.save();

        res.status(201).json(newPost);
    }catch (err){
        res.status(409).json({message: "unable able to create new post"});
    }
};
export const updatePost = async (req, res) =>{
    const {id: _id} = req.params;
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

    const updatePost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new:true});

    res.json(updatePost);
}
export const deletePost = async(req,res) =>{
    const {id}= req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

    await PostMessage.findByIdAndRemove(id);

    res.json({message: "Post deleted successfully"})
}
export const likePost = async(req,res) => {
    const{id}= req.params;
    

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status9404.send("No post with that id");

    const post = await PostMessage.findById(id)
    
    const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount: post.likeCount +1},{new:true})

    res.json(updatedPost)
}