import Post from '../models/postInterface'
interface postType {
    post: Post,
    deletPost(postId:number):void
}
export default function PostItem({post, deletPost}: postType) {
  return (
    <tr key={post.id}>
        <td>{post.id}</td>
        <td>{post.userId}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
        <td> <button className='btn btn-danger' onClick={()=>deletPost(post.id)}>Delete</button></td>
      
    </tr>
  )
}
