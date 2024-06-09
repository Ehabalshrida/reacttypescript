import React, { useState } from "react";
import Post from "../models/postInterface";
interface createProp {
    createPost(post:Post):void
}

export default function CreatePost({createPost}:createProp) {
  const [post, setPost] = useState<Post>({ id: 0, userId: 0, title: "", body: "" });
 const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    console.log({post})
    createPost({...post, userId:103, id:200})
 }
  return (
    <>
      <form className="mb-3 bg-primary rounded p-3" onSubmit={handleSubmit}>
        <div className="d-flex align-items-center justify-content-between mb-3 gap-3">
          <input className="form-control" type="text" placeholder="body" name="body" onChange={(e)=>setPost({...post, [e.target.name]:e.target.value})}/>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-3 gap-3">
          <input className="form-control" type="text" name="title"placeholder="title" onChange={(e)=>setPost({...post, [e.target.name]:e.target.value})} />
        </div>
        <div>
          {" "}
          <button type="submit" className="btn btn-warning btn-lg w-100">
            {" "}
            Add Post
          </button>
        </div>
      </form>
    </>
  );
}
