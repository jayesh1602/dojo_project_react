
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";


const BlogDetails = () => {

    const {id} = useParams();
    const {data:blog,isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/home');
        })
       


    }
    return ( 
        <div className="blog-detail">
            {isPending && <div className="loading">loading....</div>}
            {blog && (
                <article>
                    <h2><span>Title : </span>{blog.title}</h2>
                    <br></br>
                    <p>written by : <span>{blog.author}</span></p>
                    <h2 className="line"></h2>
                    <br></br>
                    <br></br>
                    <div className="blog-body">{blog.body}</div>
                    <br></br>
                    <br></br>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
            
            {/*<h2>blog details.. - { id }</h2> */}
        </div>
     );
}
 
export default BlogDetails;