import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>Blogs By Jayesh</h1>
            <div className="links">
                <Link to='/home'>Home</Link>
                <Link to='/create'>New BLog</Link>

                
                {/*
                    <a href='/'>HOME</a>
                    <a href='/create'>New Blog</a>

                    */
                }

            </div>
            
        </nav>

     );
}
 
export default Navbar;