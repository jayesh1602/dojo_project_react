//import logo from './logo.svg';
//import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './create';

import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  /*
  const title  = "welcome to react tech";
  const likes = 50;
  const link1 = "https://facebook.com";
  */
 
  return (
    <Router>
     <div className="App">
        <Navbar />    {/*  Navbar component is attached in app.js component i.e root component      */} 
                             
        <div className='content'>
         <Switch>
           <Route exact path="/home">
             <Home/>

           </Route>
           
           <Route exact path="/create">
             <Create/>

           </Route>
           <Route path="/blogs/:id">
             <BlogDetails/>

           </Route>
           <Route path="*">
             <NotFound/>
           </Route>
         </Switch>
        
        </div>
     
      </div>

    </Router>
  );
}

export default App;
