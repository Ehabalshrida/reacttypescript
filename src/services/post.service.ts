import Post from "../models/postInterface";
import axios from "axios";
class PostsAPI {
  async getAllPosts(): Promise<Post[]> {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data;
  }
  async removepost(postId: number): Promise<void> {
    await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId);
  }
  async createPost(post:Post): Promise<Post> {
    const { data } = await axios.post("https://jsonplaceholder.typicode.com/posts", post);
    return data;
  }
}
export default PostsAPI;
