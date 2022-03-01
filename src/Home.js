import { prettyDOM } from "@testing-library/react";
import { useState ,useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";


const Home = () => {
    /*

    const [name,setName] = useState('mayur');// HOOKS
    const [age,setAge] = useState(20)

    const handleClick = () => {
        setName('jayesh');
        setAge(21);

    }
    */

    /*
       fetch request to display data in json file is : 
       npx json-server --watch src/data/db.json --port 8000   
    
    */
   
  

   /*
   const handleDelete = (id) => {
       const newblog = blogs.filter(blog => blog.id !== id);
       setBlog(newblog);

   }
   */

   /* fetch data in useffect is is taking data from db.json  and print it , res is an object created here  */

   /* this usefetch is a custom hook */
   

   const {data:blogs,ispending} = useFetch('http://localhost:8000/blogs');
   
   return (  
        <div className="Home">
            {ispending && <div>Loading.....</div>}
            
            {blogs && <Bloglist blogs={blogs} titlename = {'All blogs'} />}
            
            
            {/*<h1 >Home Page</h1>*/}
            <br></br>
            
            <p>1) You can add you blogs here and also express your thoughts about any topic. </p>
            <p>2) Here is freedom to you that you can discuss any Social,Political or a and many more here..</p>
            <p>3) NOTE : dont discuss any type of topic such that some can harm by it.</p>
            
            
           
           
        </div>

    );
}
 
export default Home;

/* 
    notes :
    we make our react website as multiple page website by using ROUTES in react

    2) to install router packages 
         terminal -> npm install react-router-dom@5  -> see in package.json  react-router-dom
         
    3) route Parameters :
       /blogs/123
       /blogs/4568
       like that;
*/