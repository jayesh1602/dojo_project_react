
import { useState ,useEffect } from "react";

const useFetch = (url) => {

    const [data,setData] = useState(null);

   //const [name,setName] = useState('jayesh')

   const [ispending,setIsPending] = useState(true);
    useEffect(() => {
       
       
        fetch(url)
          .then(res => {
              return res.json();
          })
          .then(data => {
              console.log(data);
              setData(data);
              setIsPending(false);
          })
          
          .catch(err => {
              console.log(err.message)  // for printing error messages if any;
          })

        return () => console.log("clean up")
 
         
        
       
 
    } ,[url]);

    return {data,ispending}
}

export default useFetch;