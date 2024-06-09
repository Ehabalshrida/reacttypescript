import Post from "./models/postInterface";
import { useEffect, useState } from "react";
import PostItem from "./components/postItem";
import CreatePost from "./components/createPost";
// let posts: Post[] = [
//   { id: "1", userId: "1", title: "ali", body: "ali" },
//   { id: "2", userId: "2", title: "hassan", body: "hassan" },
// ];
import PostsAPI from "./services/post.service";
function App() {
  const postAPI = new PostsAPI();

  const [posts, setPosts] = useState<Post[]>([]);
  const fetchData = async () => {
    const result: Post[] = await postAPI.getAllPosts();
    console.log({ result });
    setPosts(result);
  };
  const deletPost = async (postId: number) => {
    await postAPI.removepost(postId);
    setPosts(posts.filter((item) => item.id !== postId));
  };
  const createPost = async (post: Post) => {
    const result: Post = await postAPI.createPost(post)
    setPosts([...posts, result]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container my-4">
      React with typescript
      <CreatePost createPost= {createPost}/>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserId</th>
            <th>title</th>
            <th>body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => {
            return <PostItem post={item} deletPost={deletPost} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
