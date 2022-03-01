import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry</h2>
            <p>that page cannot be found....</p>
            <br></br>
            <Link to="/home" className="back-home">back to home page...</Link>
        </div>
     );
}
 
export default NotFound;