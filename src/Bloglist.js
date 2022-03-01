import { Link } from "react-router-dom";

const bloglist = (props) => {
    const blogs = props.blogs;
    const title2 = props.titlename;
    //const handleDelete = props.handleDelete;
    
    console.log(props);
    return ( 
        <div className="blog-list">
            <h1>{title2}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                      <h2>Title : {blog.title}</h2>
                      <p>Written By :-  {blog.author}</p>
                    </Link>
                    
                    

                </div>
            
            ))}
        </div>
     );
}
 
export default bloglist;