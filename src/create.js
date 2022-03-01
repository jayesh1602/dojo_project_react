import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

/*import { useHistory } from "react-router-dom/cjs/react-router-dom.min";*/

const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault() ; {/* to prevent refresh of page  */}
        const blog = {title,body,author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)

        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/home');
            
           
        })
        
       
        
        

        /*history.go(-1) */   /*  go 1 step back after adding a blog ... and goes to the 1 st page..*/

        /* this handleSubmit function for submitting our form .... POST request for putting data in db.json and then fetching data from it.  */

    }
    
    return ( 
        <div className="create">
            <h2>Create Form</h2>
            <form onSubmit={handleSubmit} className="form">
                <label>Blog Title :</label>
                <input 
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog Body : </label>
                <textarea
                required rows='10' columns = '15' onChange={(e) => setBody(e.target.value)} value={body}></textarea>

                <label>Blog Author :  </label>
                
                {/*
                <select
                 value={author}
                 onChange={(e) => setAuthor(e.target.value) }>
                     
                    <option value="k.C.Nandi">K.C.Nandi</option>
                    <option value="J.S.Patil">J.S.Patil</option>
                    <option value="J.K.Mohan">J.P.Mohan</option>
                    <option value="default">Other..</option>


                </select>

                */} 

                <input 
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />



                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>adding blog....</button>}

                

                {
                /*<p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
                */}
            
            </form>
        </div>
     );
}
 
export default Create;